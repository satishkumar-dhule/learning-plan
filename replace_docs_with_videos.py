#!/usr/bin/env python3
import json

# YouTube video replacements for each day (replacing docs with videos)
youtube_videos = {
    "1": [
        {"title": "Linux System Calls Explained", "url": "https://www.youtube.com/watch?v=lhToWeuWWfw", "duration": "15 min"},
        {"title": "Understanding fork() and exec()", "url": "https://www.youtube.com/watch?v=PZrQ4eGm-hM", "duration": "20 min"}
    ],
    "2": [
        {"title": "Linux I/O and VFS Layer Explained", "url": "https://www.youtube.com/watch?v=YxxmNFQ8I7g", "duration": "18 min"},
        {"title": "Understanding Linux File System", "url": "https://www.youtube.com/watch?v=tuxCH5BSxRs", "duration": "25 min"}
    ],
    "3": [
        {"title": "TCP Protocol Deep Dive", "url": "https://www.youtube.com/watch?v=JFch3ctY6nE", "duration": "22 min"},
        {"title": "AWS VPC and Networking Tutorial", "url": "https://www.youtube.com/watch?v=fpxDGU2KdkA", "duration": "30 min"}
    ],
    "4": [
        {"title": "HTTP/3 and QUIC Protocol Explained", "url": "https://www.youtube.com/watch?v=ai8cf0hZ9cQ", "duration": "20 min"},
        {"title": "QUIC Protocol Deep Dive", "url": "https://www.youtube.com/watch?v=B1SQFjIXJtc", "duration": "25 min"}
    ],
    "5": [
        {"title": "Linux Memory Management", "url": "https://www.youtube.com/watch?v=0XYrET8cc6s", "duration": "25 min"},
        {"title": "AWS IAM Tutorial", "url": "https://www.youtube.com/watch?v=Ul6FW4UANGc", "duration": "20 min"}
    ],
    "6": [
        {"title": "eBPF Introduction and Tutorial", "url": "https://www.youtube.com/watch?v=_5Z2AU7QTH4", "duration": "30 min"},
        {"title": "Getting Started with eBPF", "url": "https://www.youtube.com/watch?v=99jUcLt3rSk", "duration": "22 min"}
    ],
    "7": [
        {"title": "Distributed Tracing with OpenTelemetry", "url": "https://www.youtube.com/watch?v=r8UvWSX3KA8", "duration": "28 min"},
        {"title": "OpenTelemetry Complete Tutorial", "url": "https://www.youtube.com/watch?v=1TKEtYc5tlQ", "duration": "35 min"}
    ],
    "8": [
        {"title": "Understanding etcd and Distributed Consensus", "url": "https://www.youtube.com/watch?v=DfAq4XPD0wY", "duration": "25 min"},
        {"title": "etcd Deep Dive", "url": "https://www.youtube.com/watch?v=1HgpJZw2X7c", "duration": "30 min"}
    ],
    "9": [
        {"title": "Kubernetes CNI Explained", "url": "https://www.youtube.com/watch?v=l2BS_kuQxBA", "duration": "22 min"},
        {"title": "Container Networking Deep Dive", "url": "https://www.youtube.com/watch?v=yDVb_JT4gFg", "duration": "28 min"}
    ],
    "10": [
        {"title": "Kubernetes Storage and CSI", "url": "https://www.youtube.com/watch?v=qWmV7kZN1t4", "duration": "25 min"},
        {"title": "Understanding Kubernetes Persistent Volumes", "url": "https://www.youtube.com/watch?v=0swOh5C3OVM", "duration": "20 min"}
    ],
    "11": [
        {"title": "Terraform Tutorial for Beginners", "url": "https://www.youtube.com/watch?v=7xngnjfIlK4", "duration": "35 min"},
        {"title": "Infrastructure as Code with Terraform", "url": "https://www.youtube.com/watch?v=tomUWcQ0P3k", "duration": "30 min"}
    ],
    "12": [
        {"title": "Kubernetes Security Best Practices", "url": "https://www.youtube.com/watch?v=oBf5lrmquYI", "duration": "28 min"},
        {"title": "RBAC in Kubernetes Explained", "url": "https://www.youtube.com/watch?v=BLprV3zZjTQ", "duration": "25 min"}
    ],
    "13": [
        {"title": "Kubernetes StatefulSets Tutorial", "url": "https://www.youtube.com/watch?v=pPQKAR1pA9U", "duration": "22 min"},
        {"title": "ArgoCD Tutorial - GitOps with Kubernetes", "url": "https://www.youtube.com/watch?v=MeU5_k9ssrs", "duration": "30 min"}
    ],
    "14": [
        {"title": "CI/CD Pipeline Tutorial", "url": "https://www.youtube.com/watch?v=scEDHsr3APg", "duration": "28 min"},
        {"title": "DevSecOps Pipeline Security", "url": "https://www.youtube.com/watch?v=nrhxNNH5lt0", "duration": "25 min"}
    ],
    "15": [
        {"title": "PromQL Tutorial and Deep Dive", "url": "https://www.youtube.com/watch?v=hvACEhHpFCo", "duration": "30 min"},
        {"title": "Prometheus Query Language Explained", "url": "https://www.youtube.com/watch?v=7WFPcj3Z8Nc", "duration": "25 min"}
    ],
    "16": [
        {"title": "SLOs, SLIs, and Error Budgets", "url": "https://www.youtube.com/watch?v=tEylFyxbDLE", "duration": "22 min"},
        {"title": "Google SRE - Service Level Objectives", "url": "https://www.youtube.com/watch?v=_TdJRWZvyxE", "duration": "28 min"}
    ],
    "17": [
        {"title": "Container Security Best Practices", "url": "https://www.youtube.com/watch?v=WK6A_xRXdDs", "duration": "25 min"},
        {"title": "Open Policy Agent (OPA) Tutorial", "url": "https://www.youtube.com/watch?v=Yup1FUc2Qn0", "duration": "30 min"}
    ],
    "18": [
        {"title": "Incident Management for SRE", "url": "https://www.youtube.com/watch?v=QCRe-Vo-PPo", "duration": "22 min"}
    ],
    "19": [
        {"title": "Effective Alerting Strategy", "url": "https://www.youtube.com/watch?v=b_Z2lY9-j8M", "duration": "25 min"},
        {"title": "Building Better Runbooks", "url": "https://www.youtube.com/watch?v=4E7f9l0u7Bk", "duration": "20 min"}
    ],
    "20": [
        {"title": "Modern Observability Stack Overview", "url": "https://www.youtube.com/watch?v=qAMNwJZU6Lw", "duration": "28 min"},
        {"title": "Continuous Profiling with Pyroscope", "url": "https://www.youtube.com/watch?v=mK5g_qUsFak", "duration": "25 min"}
    ],
    "21": [
        {"title": "Chaos Engineering Principles", "url": "https://www.youtube.com/watch?v=QOTNBKx9Irc", "duration": "25 min"},
        {"title": "Getting Started with Chaos Engineering", "url": "https://www.youtube.com/watch?v=1dfV8xPRjf8", "duration": "30 min"}
    ],
    "22": [
        {"title": "Load Balancing Algorithms Explained", "url": "https://www.youtube.com/watch?v=K0Ta65OqQkY", "duration": "22 min"}
    ],
    "23": [
        {"title": "Consistent Hashing Explained", "url": "https://www.youtube.com/watch?v=zaRkONvyGr8", "duration": "20 min"},
        {"title": "Sharding Database Strategies", "url": "https://www.youtube.com/watch?v=kSH4bt8ypOQ", "duration": "25 min"}
    ],
    "24": [
        {"title": "Cache Stampede Problem and Solutions", "url": "https://www.youtube.com/watch?v=xrizarXJgC8", "duration": "18 min"},
        {"title": "Caching Strategies and Best Practices", "url": "https://www.youtube.com/watch?v=U3RkDLtS7uY", "duration": "25 min"}
    ],
    "25": [
        {"title": "Database Replication Explained", "url": "https://www.youtube.com/watch?v=_8KA6N0M7ms", "duration": "22 min"},
        {"title": "Database Failover Strategies", "url": "https://www.youtube.com/watch?v=JbCBZDYO2j0", "duration": "28 min"}
    ],
    "26": [
        {"title": "CDN Architecture and How it Works", "url": "https://www.youtube.com/watch?v=RI9np1LWzqw", "duration": "25 min"},
        {"title": "Edge Computing Explained", "url": "https://www.youtube.com/watch?v=yOP5-3_WFus", "duration": "20 min"}
    ],
    "27": [
        {"title": "Rate Limiting Algorithms", "url": "https://www.youtube.com/watch?v=FU4WlwfS3G0", "duration": "22 min"},
        {"title": "API Gateway Patterns", "url": "https://www.youtube.com/watch?v=vHQqQBYJtLI", "duration": "28 min"}
    ],
    "28": [
        {"title": "Multi-Region Architecture Design", "url": "https://www.youtube.com/watch?v=GN3UsEP8qZs", "duration": "30 min"},
        {"title": "Global Traffic Management", "url": "https://www.youtube.com/watch?v=4g8RWnfOSvw", "duration": "25 min"}
    ],
    "29": [
        {"title": "FinOps and Cloud Cost Optimization", "url": "https://www.youtube.com/watch?v=VDrcgEne6lU", "duration": "28 min"},
        {"title": "AWS Cost Optimization Strategies", "url": "https://www.youtube.com/watch?v=bVU5kTVzWgM", "duration": "32 min"}
    ],
    "30": [
        {"title": "SRE Interview Preparation Guide", "url": "https://www.youtube.com/watch?v=kCBUGUQsNZg", "duration": "35 min"},
        {"title": "System Design Interview Tips", "url": "https://www.youtube.com/watch?v=DSGsa0pu8-k", "duration": "30 min"}
    ]
}

with open('src/data/days.json', 'r') as f:
    data = json.load(f)

# Replace docs with videos for each day
for day_key, videos in youtube_videos.items():
    if day_key in data:
        # Filter out all resources with type "docs"
        non_docs = [r for r in data[day_key].get("resources", []) if r.get("type") != "docs"]

        # Add the new YouTube videos
        new_videos = [
            {
                "title": video["title"],
                "url": video["url"],
                "duration": video["duration"],
                "type": "video"
            }
            for video in videos
        ]

        # Combine: new videos first, then keep any existing non-doc resources (like articles)
        data[day_key]["resources"] = new_videos + non_docs

# Write back
with open('src/data/days.json', 'w') as f:
    json.dump(data, f, indent=2)

print("✅ Replaced all documentation resources with YouTube videos!")
print("📺 Added relevant YouTube tutorials for all 30 days")
