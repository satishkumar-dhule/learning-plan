#!/usr/bin/env python3
import json

with open('src/data/days.json', 'r') as f:
    data = json.load(f)

# LeetCode problems for each day (relevant to SRE concepts)
leetcode_problems = {
    "1": [
        {"title": "Two Sum", "difficulty": "easy", "url": "https://leetcode.com/problems/two-sum/", "description": "Hash table lookups - O(1) like cache lookup in distributed systems"},
        {"title": "Valid Parentheses", "difficulty": "easy", "url": "https://leetcode.com/problems/valid-parentheses/", "description": "Stack operations - similar to parsing logs and config files"}
    ],
    "2": [
        {"title": "LRU Cache", "difficulty": "medium", "url": "https://leetcode.com/problems/lru-cache/", "description": "Implement caching strategy used in page cache and CDNs"},
        {"title": "Design HashMap", "difficulty": "easy", "url": "https://leetcode.com/problems/design-hashmap/", "description": "Understanding hash-based data structures"}
    ],
    "3": [
        {"title": "Number of Islands", "difficulty": "medium", "url": "https://leetcode.com/problems/number-of-islands/", "description": "Graph traversal - similar to network topology discovery"},
        {"title": "Network Delay Time", "difficulty": "medium", "url": "https://leetcode.com/problems/network-delay-time/", "description": "Shortest path algorithms for network routing"}
    ],
    "4": [
        {"title": "Design Rate Limiter", "difficulty": "medium", "url": "https://leetcode.com/problems/design-rate-limiter/", "description": "Implement token bucket for API rate limiting"},
        {"title": "Time Based Key-Value Store", "difficulty": "medium", "url": "https://leetcode.com/problems/time-based-key-value-store/", "description": "Time-series data storage"}
    ],
    "5": [
        {"title": "Merge K Sorted Lists", "difficulty": "hard", "url": "https://leetcode.com/problems/merge-k-sorted-lists/", "description": "Merging sorted log streams from multiple sources"},
        {"title": "Top K Frequent Elements", "difficulty": "medium", "url": "https://leetcode.com/problems/top-k-frequent-elements/", "description": "Finding top errors in logs"}
    ],
    "6": [
        {"title": "Implement Trie", "difficulty": "medium", "url": "https://leetcode.com/problems/implement-trie-prefix-tree/", "description": "Prefix matching for log filtering and search"},
        {"title": "Word Search", "difficulty": "medium", "url": "https://leetcode.com/problems/word-search/", "description": "Pattern matching in logs"}
    ],
    "7": [
        {"title": "Design Distributed System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "System design for distributed tracing"},
        {"title": "Logger Rate Limiter", "difficulty": "easy", "url": "https://leetcode.com/problems/logger-rate-limiter/", "description": "Rate limiting log messages"}
    ],
    "8": [
        {"title": "Design Key-Value Store", "difficulty": "medium", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Understanding distributed key-value stores like etcd"},
        {"title": "Consistent Hashing", "difficulty": "medium", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Load distribution across nodes"}
    ],
    "9": [
        {"title": "Clone Graph", "difficulty": "medium", "url": "https://leetcode.com/problems/clone-graph/", "description": "Understanding network topology"},
        {"title": "Course Schedule", "difficulty": "medium", "url": "https://leetcode.com/problems/course-schedule/", "description": "Dependency resolution in container orchestration"}
    ],
    "10": [
        {"title": "Design File System", "difficulty": "medium", "url": "https://leetcode.com/problems/design-file-system/", "description": "Understanding persistent storage systems"},
        {"title": "Snapshot Array", "difficulty": "medium", "url": "https://leetcode.com/problems/snapshot-array/", "description": "Point-in-time backups"}
    ],
    "11": [
        {"title": "Evaluate Reverse Polish Notation", "difficulty": "medium", "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/", "description": "Parsing and evaluating expressions in IaC"},
        {"title": "Basic Calculator", "difficulty": "hard", "url": "https://leetcode.com/problems/basic-calculator/", "description": "Expression evaluation"}
    ],
    "12": [
        {"title": "Design Authentication System", "difficulty": "medium", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "RBAC and authentication flows"},
        {"title": "Encode and Decode Strings", "difficulty": "medium", "url": "https://leetcode.com/problems/encode-and-decode-strings/", "description": "Token encoding for secrets"}
    ],
    "13": [
        {"title": "Design Leaderboard", "difficulty": "medium", "url": "https://leetcode.com/problems/design-a-leaderboard/", "description": "Maintaining ordered state in StatefulSets"},
        {"title": "Insert Delete GetRandom O(1)", "difficulty": "medium", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/", "description": "Efficient data structure operations"}
    ],
    "14": [
        {"title": "Design CI/CD Pipeline", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Pipeline orchestration and DAG execution"},
        {"title": "Task Scheduler", "difficulty": "medium", "url": "https://leetcode.com/problems/task-scheduler/", "description": "Job scheduling in CI/CD"}
    ],
    "15": [
        {"title": "Time Series Data", "difficulty": "medium", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Storing and querying metrics"},
        {"title": "Moving Average", "difficulty": "easy", "url": "https://leetcode.com/problems/moving-average-from-data-stream/", "description": "Calculating rolling metrics"}
    ],
    "16": [
        {"title": "Design Metrics System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "SLI/SLO tracking system"},
        {"title": "Design Hit Counter", "difficulty": "medium", "url": "https://leetcode.com/problems/design-hit-counter/", "description": "Counting requests for SLI"}
    ],
    "17": [
        {"title": "Design Security System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Container security and policy enforcement"},
        {"title": "Valid Sudoku", "difficulty": "medium", "url": "https://leetcode.com/problems/valid-sudoku/", "description": "Validation logic for policies"}
    ],
    "18": [
        {"title": "Design Notification System", "difficulty": "medium", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Incident alerting and escalation"},
        {"title": "Design Phone Directory", "difficulty": "medium", "url": "https://leetcode.com/problems/design-phone-directory/", "description": "On-call rotation management"}
    ],
    "19": [
        {"title": "Design Alert System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Alerting and runbook automation"},
        {"title": "Design Search Autocomplete", "difficulty": "hard", "url": "https://leetcode.com/problems/design-search-autocomplete-system/", "description": "Runbook search"}
    ],
    "20": [
        {"title": "Design Monitoring System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Modern observability stack"},
        {"title": "Design Log System", "difficulty": "medium", "url": "https://leetcode.com/problems/design-log-storage-system/", "description": "Log aggregation"}
    ],
    "21": [
        {"title": "Random Pick with Weight", "difficulty": "medium", "url": "https://leetcode.com/problems/random-pick-with-weight/", "description": "Weighted random selection for chaos experiments"},
        {"title": "Shuffle an Array", "difficulty": "medium", "url": "https://leetcode.com/problems/shuffle-an-array/", "description": "Randomization in chaos testing"}
    ],
    "22": [
        {"title": "Design Load Balancer", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Load balancing algorithms"},
        {"title": "Random Pick Index", "difficulty": "medium", "url": "https://leetcode.com/problems/random-pick-index/", "description": "Random server selection"}
    ],
    "23": [
        {"title": "Design Consistent Hash Ring", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Consistent hashing implementation"},
        {"title": "Design HashMap", "difficulty": "easy", "url": "https://leetcode.com/problems/design-hashmap/", "description": "Hash function design"}
    ],
    "24": [
        {"title": "Design Cache System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Cache stampede prevention"},
        {"title": "LFU Cache", "difficulty": "hard", "url": "https://leetcode.com/problems/lfu-cache/", "description": "Cache eviction policies"}
    ],
    "25": [
        {"title": "Design Database", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Database replication and failover"},
        {"title": "Design In-Memory File System", "difficulty": "hard", "url": "https://leetcode.com/problems/design-in-memory-file-system/", "description": "Data persistence"}
    ],
    "26": [
        {"title": "Design CDN", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Content delivery network"},
        {"title": "Design Tiny URL", "difficulty": "medium", "url": "https://leetcode.com/problems/design-tinyurl/", "description": "URL shortening at edge"}
    ],
    "27": [
        {"title": "Design API Gateway", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "API gateway with rate limiting"},
        {"title": "Design Rate Limiter", "difficulty": "medium", "url": "https://leetcode.com/problems/design-rate-limiter/", "description": "Token bucket algorithm"}
    ],
    "28": [
        {"title": "Design Multi-Region System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Global traffic management"},
        {"title": "Design Geo-Distributed System", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Cross-region replication"}
    ],
    "29": [
        {"title": "Design Cost Optimizer", "difficulty": "hard", "url": "https://leetcode.com/discuss/interview-question/system-design/", "description": "Cloud cost optimization"},
        {"title": "Best Time to Buy and Sell Stock", "difficulty": "easy", "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "description": "Optimizing resource purchase timing"}
    ],
    "30": [
        {"title": "Design URL Shortener", "difficulty": "medium", "url": "https://leetcode.com/problems/design-tinyurl/", "description": "Classic system design problem"},
        {"title": "Design Twitter", "difficulty": "hard", "url": "https://leetcode.com/problems/design-twitter/", "description": "Scalable social media system"}
    ]
}

# Add LeetCode problems to each day
for day_key, problems in leetcode_problems.items():
    if day_key in data:
        # Add leetcode field
        data[day_key]["leetcode"] = problems

# Write back
with open('src/data/days.json', 'w') as f:
    json.dump(data, f, indent=2)

print("✅ Added LeetCode problems to all 30 days!")
