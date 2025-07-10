use ic_cdk::api::caller;
use std::collections::HashMap;
use std::cell::RefCell;
use ic_cdk_macros::{query, update};
use candid::CandidType;
use serde::{Deserialize, Serialize};

#[derive(CandidType, Deserialize, Serialize, Clone)]
struct UserProfile {
    principal: String,
    created_at: u64,
}

// In-memory storage of user profiles
thread_local! {
    static PROFILES: RefCell<HashMap<String, UserProfile>> = RefCell::new(HashMap::new());
}

#[update]
fn create_or_get_profile() -> UserProfile {
    let principal_id = caller().to_text();
    let now = ic_cdk::api::time() / 1_000_000; // convert to seconds

    PROFILES.with(|profiles| {
        let mut map = profiles.borrow_mut();
        map.entry(principal_id.clone())
            .or_insert(UserProfile {
                principal: principal_id.clone(),
                created_at: now,
            })
            .clone()
    })
}

#[query]
fn get_profile(p: String) -> Option<UserProfile> {
    PROFILES.with(|profiles| profiles.borrow().get(&p).cloned())
}

#[query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}
