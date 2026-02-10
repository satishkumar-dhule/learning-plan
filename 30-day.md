🚀 The 30-Day SRE War Plan (2026 Tier-1 Prep)

## 📑 Quick Navigation

**Setup & Getting Started**
- [🤖 AI Learning Assistants](#-ai-learning-assistants---your-study-companions)
- [🎬 Before You Start - Setup Checklist](#-before-you-start---setup-checklist)
- [📅 Daily Routine](#the-high-performance-routine-mon-sat)

**📅 Week 1: Systems Internals, Networking & Cloud** 🛠️
- [Day 1: Process Lifecycle & System Calls](#day-1-the-process-lifecycle--system-calls)
- [Day 2: Advanced I/O & VFS Layer](#day-2-advanced-io--the-vfs-layer)
- [Day 3: TCP Internals & Cloud Networking (VPC, Security Groups)](#day-3-tcp-internals--cloud-networking-vpc-security-groups)
- [Day 4: HTTP/3 & QUIC Protocol](#day-4-http3--the-quic-protocol)
- [Day 5: Memory Management, OOM Killer & Cloud IAM/Compute](#day-5-memory-management-oom-killer--cloud-iamcompute)
- [Day 6: eBPF & Kernel Observability](#day-6-ebpf--kernel-observability)
- [Day 7: Distributed Tracing, OpenTelemetry & Cloud Observability](#day-7-distributed-tracing-opentelemetry--cloud-observability)

**📅 Week 2: Kubernetes, Infrastructure as Code & CI/CD** ☸️
- [Day 8: The etcd Distributed State Machine](#day-8-the-etcd-distributed-state-machine)
- [Day 9: CNI & Overlay Networking](#day-9-cni--overlay-networking)
- [Day 10: Persistent Data & CSI](#day-10-persistent-data--csi)
- [Day 11: Terraform Fundamentals & Infrastructure as Code](#day-11-terraform-fundamentals--infrastructure-as-code)
- [Day 12: Kubernetes Security, RBAC, OIDC & Secrets Management](#day-12-kubernetes-security-rbac-oidc--secrets-management)
- [Day 13: StatefulSets, Headless Services & GitOps with ArgoCD](#day-13-statefulsets-headless-services--gitops-with-argocd)
- [Day 14: CI/CD Pipelines & Pipeline Security (DevSecOps)](#day-14-cicd-pipelines--pipeline-security-devsecops)

**📅 Week 3: Observability, Security & Incident Management** 📈
- [Day 15: PromQL & High-Cardinality](#day-15-promql--high-cardinality)
- [Day 16: SLOs, SLIs, and Error Budgets](#day-16-slos-slis-and-error-budgets)
- [Day 17: Container Security & Policy Enforcement (OPA, Falco)](#day-17-container-security--policy-enforcement-opa-falco)
- [Day 18: Incident Management, Communication & Stakeholder Updates](#day-18-incident-management-communication--stakeholder-updates)
- [Day 19: Alerting Strategy & Runbooks](#day-19-alerting-strategy--runbooks)
- [Day 20: Modern Observability Stack (VictoriaMetrics, Tempo, Pyroscope)](#day-20-modern-observability-stack-victoriametrics-tempo-pyroscope)
- [Day 21: Chaos Engineering & Fault Injection](#day-21-chaos-engineering--fault-injection)

**📅 Week 4: Architecture & Global Reliability** 🌍
- [Day 22: Load Balancing Algorithms & Health Checks](#day-22-load-balancing-algorithms--health-checks)
- [Day 23: Consistent Hashing & Sharding](#day-23-consistent-hashing--sharding)
- [Day 24: Cache Stampede & Mitigation](#day-24-cache-stampede--mitigation)
- [Day 25: Database Replication & Failover](#day-25-database-replication--failover)
- [Day 26: CDN Architecture & Edge Computing](#day-26-cdn-architecture--edge-computing)
- [Day 27: Rate Limiting & API Gateway Patterns](#day-27-rate-limiting--api-gateway-patterns)
- [Day 28: Multi-Region Deployments & Global Traffic Management](#day-28-multi-region-deployments--global-traffic-management)
- [Day 29: FinOps & Cloud Cost Optimization at Scale](#day-29-finops--cloud-cost-optimization-at-scale)
- [Day 30: Mock SRE Interview (Technical + Behavioral) & Career Prep](#day-30-mock-sre-interview-technical--behavioral--career-prep)

**📚 Appendices**
- [Appendix A: Complete Interview Question Bank (100+ Questions)](#-appendix-a-complete-interview-question-bank)
- [Appendix B: Certification Paths (AWS, CKA, Terraform)](#-appendix-b-certification-paths)
- [Appendix C: Detailed Portfolio Project Specifications](#-appendix-c-detailed-portfolio-project-specifications)
- [Appendix D: Common Production Troubleshooting Scenarios](#-appendix-d-common-production-troubleshooting-scenarios)
- [Appendix E: Salary Negotiation for SRE Roles (2026)](#-appendix-e-salary-negotiation-for-sre-roles-2026)
- [Appendix F: 90-Day Interview Preparation Timeline](#-appendix-f-90-day-interview-preparation-timeline)
- [Appendix G: Real Company Interview Processes](#-appendix-g-real-company-interview-processes)
- [Appendix H: Hands-On Labs & Practice Environments](#-appendix-h-hands-on-labs--practice-environments)
- [Appendix I: Resume & LinkedIn Optimization](#-appendix-i-resume--linkedin-optimization)
- [Appendix J: AI Prompts for All 30 Days](#-appendix-j-ai-prompts-for-all-30-days)

---

## 🤖 AI Learning Assistants - Your Study Companions

Each day includes AI prompts you can use with these tools to generate personalized learning materials:

### Recommended AI Tools by Use Case

**Best for Code Examples & Debugging** 🥇
- **Claude (Sonnet 4.5)**: https://claude.ai/
  - Best for: System design, architecture discussions, explaining complex concepts
  - Context window: 200K tokens (can paste entire codebases)
  - Free tier: Generous daily limits
  - **Use for**: Days 1-7 (Systems), Days 22-30 (Architecture)

**Best for Quick Answers & Tutorials** 🥈
- **ChatGPT (GPT-4o)**: https://chat.openai.com/
  - Best for: Code generation, problem-solving, step-by-step tutorials
  - Free tier: GPT-4o-mini (good enough for most tasks)
  - Paid ($20/mo): GPT-4o (better reasoning)
  - **Use for**: Days 8-14 (K8s), Days 15-21 (Observability)

**Best for Search & Research** 🥉
- **Gemini (2.0 Flash)**: https://gemini.google.com/
  - Best for: Googling + summarizing, finding documentation, code analysis
  - Free tier: Unlimited (as of 2026)
  - Integrated with Google Search
  - **Use for**: Research tasks, finding recent updates

**Best for Real-Time Info** 🆕
- **Grok (xAI)**: https://grok.x.ai/
  - Best for: Current events, recent tech updates, real-time data
  - Real-time data from X/Twitter
  - Requires X Premium ($8/mo)
  - **Use for**: Latest tool versions, recent CVEs, trending practices

### How to Use Daily AI Prompts

**Step 1**: Look for the 🤖 **AI PROMPT** section in each day
**Step 2**: Copy the entire prompt (including context)
**Step 3**: Paste into your preferred AI assistant
**Step 4**: Follow up with specific questions
**Step 5**: Practice hands-on (don't just read!)

**Pro Tips for Better AI Responses**:
```
✅ DO:
- Ask for examples: "Show me a production-ready example"
- Request explanations: "Explain this like I'm interviewing for Google SRE"
- Verify information: "What are the edge cases?"
- Iterate: "Make this more secure/scalable/cost-effective"
- Request comparisons: "Compare approach A vs B with pros/cons"

❌ DON'T:
- Blindly copy-paste code without understanding
- Skip hands-on practice
- Use AI as a replacement for official documentation
- Forget to test the code yourself
- Rely only on AI for interview prep
```

### Example: How to Use an AI Prompt

**Prompt from Day 1** (copy this):
```
I'm learning SRE and focusing on Linux process lifecycle today.

Topics to cover:
1. fork(), clone(), execve(), wait4() system calls
2. How to use strace for debugging
3. /proc filesystem for process inspection
4. Zombie vs orphan processes

Please:
- Explain each concept with real-world SRE examples
- Provide hands-on commands I can run
- Include common debugging scenarios
- Give me 3 practice exercises

Context: I have basic Linux knowledge and want to prepare for FAANG SRE interviews.
```

**Then follow up with**:
- "Show me how to debug a 100% CPU process"
- "What would you ask in an interview about this?"
- "Give me a production scenario where this knowledge helps"

---

## 🎬 Before You Start - Setup Checklist

### Required Accounts (All Free Tier)
- ✅ **AWS Account**: https://aws.amazon.com/free/ (12 months free tier - $750 credits for EC2, VPC, RDS)
- ✅ **GitHub Account**: https://github.com/ (Free - unlimited public/private repos, GitHub Actions 2000 min/month)
- ✅ **Docker Hub**: https://hub.docker.com/ (Free - 1 private repo, unlimited public)
- ✅ **Terraform Cloud**: https://app.terraform.io/signup (Free - up to 500 resources)
- ✅ **Grafana Cloud**: https://grafana.com/products/cloud/ (Free tier - 10K metrics, 50GB logs, 50GB traces)
- ✅ **O'Reilly Learning**: https://www.oreilly.com/ (10-day free trial or check if your library offers free access)

### Local Development Setup
```bash
# Install Homebrew (macOS) or apt/yum (Linux)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Core Tools
brew install \
  kubectl \
  terraform \
  awscli \
  helm \
  k9s \
  jq \
  yq \
  htop \
  bpftrace \
  wrk \
  vegeta

# Docker Desktop: https://www.docker.com/products/docker-desktop/
# Kind (Kubernetes in Docker): brew install kind
# VS Code + Extensions: https://code.visualstudio.com/
  # - Terraform
  # - Kubernetes
  # - YAML
  # - GitLens
```

### Learning Resources Setup
- 📚 **Create GitHub Repo**: `sre-30-day-challenge` (document your journey daily)
- 📝 **Daily Log Template**: Create `daily-logs/day-XX.md` for notes
- 🎯 **LeetCode Account**: https://leetcode.com/ (track your 60+ problems)
- 💼 **LinkedIn**: Update profile, prepare to post weekly learnings

### Time Commitment
- **Mon-Sat**: 2 hours/day (15:00-17:00)
- **Sunday**: Full rest (brain consolidation)
- **Total**: ~60 hours over 30 days

---

The High-Performance Routine (Mon-Sat):

15:00 - 15:40: 🛠️ Block 1: Technical Drill (Execution & Labs)

15:40 - 15:50: ☕ Brain Break 1

15:50 - 16:30: 💻 Block 2: Logic & DSA (1 Easy + 1 Medium)

16:30 - 16:40: ☕ Brain Break 2

16:40 - 17:00: 🏗️ Closing Sprint (Design & Career)

---

# 🛠️ WEEK 1: Systems Internals, Networking & Cloud Foundations

---

## Day 1: The Process Lifecycle & System Calls

[⬆️ Back to Top](#-quick-navigation)

15:00 Technical Drill (40 min):

**Watch** (15 min):
- Linux System Programming (O'Reilly) - Ch. 3: https://learning.oreilly.com/library/view/linux-system-programming/9781449341527/
- Alternative: Brendan Gregg's "Linux Systems Performance" (YouTube): https://www.youtube.com/watch?v=fhBgNjU8O7g

**Execute** (25 min):
```bash
# 1. System call profiling (5 min)
strace -c -S name ls -R / 2>&1 | head -30
# Expected output: read(), write(), openat() will dominate
# Key insight: I/O syscalls vs. CPU syscalls ratio

# 2. Identify latency outliers (5 min)
strace -c -S time ls -R /usr 2>&1
# Look for: Which syscall has highest total time?
# Common culprit: stat(), fstat() for file metadata

# 3. Trace live process (10 min)
# Start a simple web server
python3 -m http.server 8000 &
SERVER_PID=$!

# Trace network + file syscalls
sudo strace -p $SERVER_PID -e trace=network,file -v -s 200
# In another terminal: curl http://localhost:8000
# Observe: accept4(), recvfrom(), sendto(), openat()

# 4. Analyze process hierarchy (5 min)
ps aux --forest | grep python3
pstree -p $SERVER_PID
cat /proc/$SERVER_PID/status | grep -E "Pid|PPid|Threads"
```

**Achieve**:
- Explain fork() → clone() → execve() flow with COW (Copy-on-Write)
- Understand wait4() for zombie process cleanup
- Master /proc filesystem: `/proc/<pid>/{status,cmdline,environ,fd/,stack}`

**Hands-On Resources**:
- Linux syscall table: https://filippo.io/linux-syscall-table/
- Interactive strace tutorial: https://jvns.ca/blog/2014/08/24/strace-lets-you-see-how-programs-work/
- Practice lab: https://killercoda.com/het-tanis/course/Linux-Labs/strace-introduction

**Common Pitfalls**:
- ❌ Running strace on production without understanding overhead (5-10x slowdown!)
- ❌ Not filtering syscalls (use `-e trace=file` instead of full trace)
- ✅ Use perf or eBPF for production (covered Day 6)

15:50 Logic & DSA (40 min):

**Easy: Two Sum** (15 min)
- Link: https://leetcode.com/problems/two-sum/
- SRE Context: Hash table lookups = O(1) like cache lookup in distributed system
- Target: <10 minutes to solve with test cases

**Medium: Group Anagrams** (25 min)
- Link: https://leetcode.com/problems/group-anagrams/
- SRE Context: Categorizing similar log patterns for log aggregation
- Key insight: Sorted string as hash key = log fingerprinting technique

**Practice Tips**:
- Use LeetCode Timer plugin
- Write test cases FIRST (TDD mindset)
- Explain solution out loud (interview practice)

16:40 Closing Sprint (20 min):

**Scenario**: Production Java app showing 100% CPU.
- **Step 1**: `top` shows java PID 1234 at 100%
- **Step 2**: Check thread-level: `top -H -p 1234` → Thread 1240 is culprit
- **Step 3**: Convert to hex: `printf "%x\n" 1240` → `4d8`
- **Step 4**: Get Java stack: `jstack 1234 | grep -A 10 4d8`
- **Step 5**: Syscall analysis: `sudo strace -c -p 1240` (avoid if already 100% CPU!)
- **Better**: `cat /proc/1240/stack` (kernel stack, low overhead)
- **Root cause**: Tight loop, GC thrashing, or infinite recursion

**Interview Questions You Can Now Answer**:
1. "What's the difference between fork() and clone()?"
2. "How would you debug a process stuck in uninterruptible sleep (D state)?"
3. "Explain zombie vs. orphan processes"
4. "When should you NOT use strace in production?"

**Career Move**:
- Update LinkedIn headline: "SRE | Specializing in Linux Kernel Observability & Performance Tuning"
- Write post: "How I debugged 100% CPU using /proc filesystem (with examples)"
- GitHub: Create `linux-debugging-toolkit` repo with your strace one-liners

**Further Reading**:
- "The Linux Programming Interface" by Michael Kerrisk: https://man7.org/tlpi/
- strace cheat sheet: https://github.com/DominicBreuker/strace-cheat-sheet

---

### 🤖 AI PROMPT FOR DAY 1

**Copy this into Claude, ChatGPT, Gemini, or Grok**:

```
I'm on Day 1 of SRE interview preparation, focusing on Linux Process Lifecycle & System Calls.

My learning goals for today:
1. Master fork(), clone(), execve(), wait4() - how processes are created and managed
2. Learn strace for production debugging (when to use, when NOT to use)
3. Understand /proc filesystem for process inspection
4. Differentiate zombie vs orphan processes and how to handle them
5. Debug a 100% CPU process using strace and /proc

Please provide:
1. **Conceptual Overview** (5 min read):
   - Explain the process lifecycle from creation to termination
   - Real-world SRE scenarios where this knowledge is critical

2. **Hands-On Commands** (20 min practice):
   - 5 strace commands with expected outputs
   - 5 /proc filesystem inspection commands
   - Include pitfalls (e.g., strace overhead in production)

3. **Debug Scenario** (15 min):
   - Walk me through debugging a Java process at 100% CPU
   - Include: identifying thread, getting stack trace, root cause analysis

4. **Interview Prep**:
   - 5 questions Google/Meta might ask about process management
   - STAR method answer for "Tell me about debugging a production process issue"

5. **Practice Exercises**:
   - 3 hands-on challenges I can do locally (beginner to intermediate)

Context: I have basic Linux CLI knowledge. Target: FAANG SRE roles. Make examples production-focused.
```

**Follow-up questions to ask**:
- "Explain COW (Copy-on-Write) in fork() with a memory diagram"
- "When would I use strace vs perf vs eBPF in production?"
- "Give me a cheat sheet of /proc files every SRE should know"
- "What's the most common process-related production issue you've seen?"

---

## Day 2: Advanced I/O & The VFS Layer

[⬆️ Back to Top](#-quick-navigation)

15:00 Technical Drill:

Watch: Linux Operations and Administration (Pluralsight) - Storage.
Link: https://www.pluralsight.com/courses/linux-operations-administration

Execute: Exhaust Inodes. Monitor %util with iostat -xz 1. Identify unlinked open files with lsof | grep deleted.

Achieve: Understand Page Cache, Dirty Pages, and fsync() performance impact.

15:50 Logic & DSA: 1. Easy: Valid Anagram.
2. Medium: Top K Frequent Elements (Analyzing frequent log errors).

16:40 Closing Sprint:

Scenario: High iowait troubleshooting: I/O thrashing vs. hardware vs. journal config.

Career: LinkedIn Post: Bash script for finding top open file descriptor consumers.

---

## Day 3: TCP Internals & Cloud Networking (VPC, Security Groups)

[⬆️ Back to Top](#-quick-navigation)

15:00 Technical Drill:

Watch: Networking for DevOps Fundamentals (Pluralsight).
Link: https://www.pluralsight.com/courses/networking-devops-fundamentals

Execute:
- Part 1: tc qdisc add dev eth0 root netem delay 200ms 50ms 25%. Monitor cwnd and RTT with ss -tie.
- Part 2: Create AWS VPC with public/private subnets. Configure NAT Gateway, Security Groups, NACLs. Test inter-subnet connectivity.

Achieve: Explain BDP, congestion control (Cubic/BBR). Master VPC CIDR planning, Security Group vs. NACL (stateful vs. stateless).

15:50 Logic & DSA: 1. Easy: Valid Parentheses.
2. Medium: Min Stack (Tracking state history - maps to VPC routing tables).

16:40 Closing Sprint:

Scenario: Proving "speed of light" vs. app bug for cross-continental API latency. Debug why EC2 instance can't reach internet (IGW vs. NAT Gateway misconfiguration).

Career: LinkedIn Post: "VPC Design Patterns That Prevent Production Outages."

Day 4: HTTP/3 & The QUIC Protocol

15:00 Technical Drill:

Watch: HTTP/3 Explained (O'Reilly).
Link: https://http3-explained.haxx.se/

Execute: curl --http3 -v. Identify QUIC Connection ID via tshark capture.

Achieve: Explain TCP vs. QUIC streams and Connection Migration (Wi-Fi to 5G).

15:50 Logic & DSA: 1. Easy: Best Time to Buy/Sell Stock.
2. Medium: Longest Substring Without Repeating Characters.

16:40 Closing Sprint:

Scenario: Pitching HTTP/3 to solve Head-of-Line blocking in mobile gaming lobby chat.

Day 5: Memory Management, OOM Killer & Cloud IAM/Compute

15:00 Technical Drill:

Watch: Systems Performance, 2nd Ed (O'Reilly) - Ch. 7.
Link: https://learning.oreilly.com/library/view/systems-performance-2nd/9780136821694/

Execute:
- Part 1: Trigger OOM via allocation loop. Monitor /proc/<pid>/oom_score. Read journalctl -k.
- Part 2: Launch EC2 instances with IAM roles. Configure instance profiles. Use AWS CLI with temporary credentials (STS AssumeRole).

Achieve: Understand Anonymous vs. File-backed memory. Master IAM policies (identity vs. resource-based), least-privilege principle, EC2 instance types (compute-optimized vs. memory-optimized).

15:50 Logic & DSA: 1. Easy: Valid Palindrome.
2. Medium: Longest Palindromic Substring (pattern recognition - maps to IAM policy evaluation logic).

16:40 Closing Sprint:

Scenario: Debug OOM on production EC2. Identify if instance type is undersized or application has memory leak. Pitch rightsizing strategy using CloudWatch metrics.

Career: Vibe Coding Goal: Create "Cloud Cost & Performance Optimizer" tool (EC2 rightsizing calculator) using React. Publish to github.io.

Day 6: eBPF & Kernel Observability

15:00 Technical Drill:

Watch: BPF Performance Tools (O'Reilly) - Introduction.
Link: https://www.brendangregg.com/bpf-performance-tools-book.html

Execute: Use bpftrace to trace slow syscalls: bpftrace -e 'tracepoint:syscalls:sys_enter_* { @start[tid] = nsecs; } tracepoint:syscalls:sys_exit_* /@start[tid]/ { @duration = hist((nsecs - @start[tid]) / 1000); delete(@start[tid]); }'.

Achieve: Understand eBPF safety guarantees, CO-RE, and BTF.

15:50 Logic & DSA: 1. Easy: Climbing Stairs.
2. Medium: Decode Ways (State machine pattern).

16:40 Closing Sprint:

Scenario: Proving that a production issue is NOT code but kernel scheduler throttling using eBPF.

Career: LinkedIn Post: "5 Production Issues I Solved with eBPF That APM Tools Couldn't Catch."

Day 7: Distributed Tracing, OpenTelemetry & Cloud Observability

15:00 Technical Drill:

Watch: Observability Engineering (O'Reilly) - Ch. 6.
Link: https://learning.oreilly.com/library/view/observability-engineering/9781492076438/

Execute:
- Part 1: Instrument a microservice with OpenTelemetry. Visualize trace spans in Jaeger. Inject latency and identify bottleneck span.
- Part 2: Configure CloudWatch custom metrics, alarms, and dashboards. Set up AWS X-Ray for distributed tracing. Compare CloudWatch vs. Prometheus trade-offs.

Achieve: Master Span Context Propagation (W3C Trace Context), Sampling strategies. Understand cloud-native observability (CloudWatch, X-Ray) vs. self-hosted (Prometheus, Jaeger).

15:50 Logic & DSA: 1. Easy: Binary Search (finding specific metric thresholds).
2. Medium: Search in Rotated Sorted Array (anomaly detection in time-series).

16:40 Closing Sprint:

Scenario: Using distributed tracing to find the "missing 200ms" in a 3-service call chain across AWS regions. Identify if latency is cross-region networking, Lambda cold start, or application code.

Career: Vibe Coding Goal: Build "Multi-Cloud Observability Dashb oard" (aggregates AWS CloudWatch + Prometheus). Publish to github.io.

---

# ☸️ WEEK 2: Kubernetes, Infrastructure as Code & CI/CD

---

## Day 8: The etcd Distributed State Machine

[⬆️ Back to Top](#-quick-navigation)

15:00 Technical Drill:

Watch: Kubernetes: Up & Running (O'Reilly) - Ch. 3.
Link: https://learning.oreilly.com/library/view/kubernetes-up-and/9781098110192/

Execute: Monitor K8s changes with etcdctl watch. Manually delete etcd key to observe Convergence.

Achieve: Explain Raft Consensus, Quorum, and Leader roles.

15:50 Logic & DSA: 1. Easy: Linked List Cycle.
2. Medium: Remove Nth Node From End of List.

16:40 Closing Sprint:

Scenario: Using etcd_disk_wal_fsync_duration_seconds to prove disk latency bottlenecks.

Day 9: CNI & Overlay Networking

15:00 Technical Drill:

Watch: Kubernetes Networking Deep Dive (Pluralsight).
Link: https://www.pluralsight.com/courses/kubernetes-networking-deep-dive

Execute: Identify MASQUERADE rules with iptables -t nat -L. Use nsenter for Pod-level tcpdump.

Achieve: Distinguish Overlay (VXLAN) from Underlay (BGP) networking.

15:50 Logic & DSA: 1. Easy: Merge Two Sorted Lists.
2. Medium: Reorder List.

16:40 Closing Sprint:

Scenario: Checking for MTU mismatches and CNI encapsulation overhead in inter-pod timeouts.

Day 10: Persistent Data & CSI

15:00 Technical Drill:

Watch: Kubernetes Patterns (O'Reilly) - Storage.
Link: https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050285/

Execute: Force node failure in Kind. Watch PVC re-attach to a new Pod on a different node.

Achieve: Master CSI lifecycle: Create, Attach, Mount. Explain RWO vs. RWX.

15:50 Logic & DSA: 1. Easy: Reverse Linked List.
2. Medium: Copy List with Random Pointer.

16:40 Closing Sprint:

Career: Portfolio Project #1: Build "K8s FinOps Dashboard" - Real-time cost analysis per namespace/pod using Kubecost API. Features: cost allocation, resource efficiency score, savings recommendations. Tech: React + FastAPI + Prometheus. Deploy to GitHub Pages with backend on free tier. Document ROI calculation methodology.

Day 11: Terraform Fundamentals & Infrastructure as Code

15:00 Technical Drill:

Watch: Terraform: Up & Running (O'Reilly) - Ch. 1-3.
Link: https://learning.oreilly.com/library/view/terraform-up/9781098116736/

Execute:
- Write Terraform to provision VPC, EC2, RDS. Apply with terraform plan/apply.
- Implement remote state (S3 backend with DynamoDB locking).
- Refactor using modules. Demonstrate terraform import for existing resources.

Achieve: Master declarative IaC, state management, workspaces. Understand lifecycle meta-arguments (create_before_destroy, prevent_destroy).

15:50 Logic & DSA: 1. Easy: Implement Queue using Stacks (state machines - maps to Terraform state transitions).
2. Medium: Evaluate Reverse Polish Notation (dependency resolution - maps to Terraform resource DAG).

16:40 Closing Sprint:

Scenario: Debugging "resource already exists" error. Demonstrate terraform import. Pitch Terraform vs. CloudFormation vs. Pulumi to engineering manager.

Career: LinkedIn Post: "5 Terraform Anti-Patterns That Cost Us $10K/Month."

Day 12: Kubernetes Security, RBAC, OIDC & Secrets Management

15:00 Technical Drill:

Watch: Kubernetes Security (O'Reilly) - Ch. 4.
Link: https://learning.oreilly.com/library/view/kubernetes-security/9781492039075/

Execute:
- Part 1: Create ClusterRole, RoleBinding. Use kubectl auth can-i --as=system:serviceaccount:default:my-sa get pods.
- Part 2: Configure OIDC authentication with identity provider. Set up External Secrets Operator to sync from AWS Secrets Manager/Vault. Never store secrets in Git!

Achieve: Understand least-privilege design, BoundServiceAccountTokenVolume, OIDC token flow. Master secrets management (sealed-secrets, external-secrets, Vault integration).

15:50 Logic & DSA: 1. Easy: Diameter of Binary Tree (trust chains - maps to certificate chains).
2. Medium: Validate Binary Search Tree (access control hierarchy validation).

16:40 Closing Sprint:

Scenario: Auditing unexpected pod escalations via kubectl audit logs. Investigate secret leakage via pod logs. Pitch zero-trust architecture with service mesh mTLS.

Career: LinkedIn Post: "RBAC Anti-Patterns That Create Production Vulnerabilities + How We Implemented Zero-Trust K8s."

Day 13: StatefulSets, Headless Services & GitOps with ArgoCD

15:00 Technical Drill:

Watch: Managing Kubernetes (O'Reilly) - StatefulSets.
Link: https://learning.oreilly.com/library/view/managing-kubernetes/9781492033905/

Execute:
- Part 1: Deploy Kafka/Zookeeper StatefulSet. Use nslookup to verify stable network identity (pod-0.svc.ns.svc.cluster.local).
- Part 2: Install ArgoCD. Create GitOps pipeline: Git commit → ArgoCD sync → K8s deployment. Implement sync waves and health checks.

Achieve: Master ordinal index, PVC retention, podManagementPolicy. Understand GitOps principles (Git as single source of truth), ArgoCD sync strategies (auto vs. manual), app-of-apps pattern.

15:50 Logic & DSA: 1. Easy: Invert Binary Tree (state reconciliation - maps to GitOps desired state).
2. Medium: Construct Binary Tree from Preorder and Inorder (DAG construction - maps to ArgoCD app dependencies).

16:40 Closing Sprint:

Scenario: Debugging Cassandra split-brain during rolling restart. Compare kubectl apply vs. GitOps deployment for audit trail and rollback capabilities.

Career: LinkedIn Post: "How GitOps Reduced Our Deployment Incidents by 80%."

Day 14: CI/CD Pipelines & Pipeline Security (DevSecOps)

15:00 Technical Drill:

Watch: Continuous Delivery in Practice (O'Reilly) - CI/CD Pipelines.
Link: https://learning.oreilly.com/library/view/continuous-delivery/9780136892656/

Execute:
- Build end-to-end GitHub Actions pipeline: lint → test → build → security scan (Trivy, Snyk) → push image → deploy to K8s.
- Implement branch protection, required checks, OIDC authentication (no long-lived secrets!).
- Add SBOM generation (syft/cyclonedx). Scan for secrets (gitleaks).

Achieve: Master CI/CD stages, pipeline-as-code, security gates (SAST, DAST, SCA). Understand shift-left security, artifact attestation, supply chain security (SLSA framework).

15:50 Logic & DSA: 1. Easy: Balanced Binary Tree (build validation - maps to CI health checks).
2. Medium: Flatten Binary Tree to Linked List (pipeline stage linearization).

16:40 Closing Sprint:

Scenario: Pipeline is failing on security scan (critical CVE in base image). Demonstrate how to pin image SHA, update base image, and verify fix. Calculate pipeline deployment frequency vs. MTTR trade-offs.

Career: Portfolio Project #2: Build "Production-Grade CI/CD Template Repository" - Complete pipeline: lint → test → build → security scan (Trivy, Snyk, gitleaks) → SBOM generation → sign artifacts → deploy to K8s with ArgoCD. Include branch protection, OIDC auth, rollback procedures. Document DORA metrics achieved (deployment frequency, lead time, MTTR). This is a "show-don't-tell" project that proves pipeline expertise.

---

# 📈 WEEK 3: Observability, Security & Incident Management

---

## Day 15: PromQL & High-Cardinality

[⬆️ Back to Top](#-quick-navigation)

15:00 Technical Drill:

Watch: Prometheus: Up & Running (O'Reilly) - Ch. 4.
Link: https://learning.oreilly.com/library/view/prometheus-up/9781492034131/

Execute: Build histogram_quantile SLO query. Simulate Cardinality Explosion with UUID labels.

Achieve: Explain why high cardinality kills Prometheus memory.

15:50 Logic & DSA: 1. Easy: Kth Largest Element in a Stream.
2. Medium: Kth Largest Element in an Array (Heap logic).

16:40 Closing Sprint:

Scenario: Slow-loading dashboards: identifying "heavy" queries and namespace label optimization.

Day 16: SLOs, SLIs, and Error Budgets

15:00 Technical Drill:

Watch: Implementing Service Level Objectives (O'Reilly).
Link: https://learning.oreilly.com/library/view/implementing-service-level/9781492076803/

Execute: Define 99.9% availability SLO. Calculate error budget: (1 - 0.999) * 30 days * 24 * 60 = 43.2 minutes/month.

Achieve: Master Request-based vs. Window-based SLIs. Understand burn rate alerts.

15:50 Logic & DSA: 1. Easy: Contains Duplicate.
2. Medium: Product of Array Except Self.

16:40 Closing Sprint:

Scenario: Defending a controlled rollout that consumed 20% of monthly error budget.

Career: LinkedIn Post: "Why Error Budgets Changed How We Ship Features."

Day 17: Container Security & Policy Enforcement (OPA, Falco)

15:00 Technical Drill:

Watch: Container Security (O'Reilly) - Runtime Security.
Link: https://learning.oreilly.com/library/view/container-security/9781492056690/

Execute:
- Deploy Falco for runtime security. Detect suspicious container behavior (unexpected file access, privilege escalation).
- Implement Open Policy Agent (OPA/Gatekeeper). Write admission policies: block privileged pods, enforce resource limits, require security contexts.
- Scan images with Trivy/Grype. Identify CVEs and block deployment of critical vulnerabilities.

Achieve: Understand container security layers (image, runtime, network). Master admission controllers, Pod Security Standards (restricted/baseline/privileged), runtime detection vs. prevention.

15:50 Logic & DSA: 1. Easy: Missing Number (anomaly detection - maps to security outliers).
2. Medium: Find the Duplicate Number (finding compromised containers in fleet).

16:40 Closing Sprint:

Scenario: Falco alert triggers on production pod accessing /etc/shadow. Investigate if breach or misconfigured app. Demonstrate incident response: isolate pod, capture forensics, rotate credentials.

Career: LinkedIn Post: "How We Prevented a Container Breakout Using Runtime Security."

Day 18: Incident Management, Communication & Stakeholder Updates

15:00 Technical Drill:

Watch: SRE Workbook (O'Reilly) - Ch. 9 & Incident Management.
Link: https://learning.oreilly.com/library/view/the-site-reliability-workbook/9781492029496/

Execute:
- Part 1: Parse multi-GB logs with awk/sed. Trace correlation IDs. Filter JSON with jq.
- Part 2: Practice incident communication: Write executive status updates (non-technical). Draft customer-facing incident notification. Create internal timeline with technical details.

Achieve: Master "Triage-first" mindset (Mitigate > Root-Cause). Learn incident roles (Commander, Scribe, Communications Lead). Practice translating technical issues to business impact.

Soft Skills Practice:
- "Our database is experiencing high replication lag" → Executive version: "Payment processing may be delayed 2-3 minutes. No data loss risk. ETA to resolution: 30 minutes."
- Draft 3 incident update templates: Initial notification, In-progress update, Resolution notice.

15:50 Logic & DSA: 1. Easy: Max Depth of Binary Tree (incident escalation hierarchy).
2. Medium: Binary Tree Level Order Traversal (BFS for incident triage - check high-priority services first).

16:40 Closing Sprint:

Scenario: P1 incident during business hours. You're the Incident Commander. Walk through: PagerDuty escalation, initial assessment, stakeholder notification, mitigation steps, postmortem scheduling.

Career: Portfolio Project #3: Build "Incident Management Platform" - Not just postmortem generator, but full incident lifecycle tool: PagerDuty webhook integration, auto-create Slack channel, postmortem template with severity calculator, action item tracker with Jira integration, timeline builder. Include executive summary auto-generator (translates technical details to business impact). Demonstrate "soft skills + technical skills" combination.

Day 19: Alerting Strategy & Runbooks

15:00 Technical Drill:

Watch: Practical Monitoring (O'Reilly) - Ch. 3.
Link: https://learning.oreilly.com/library/view/practical-monitoring/9781491957349/

Execute: Design multi-window burn rate alert: (5m burn > 14.4x AND 1h burn > 14.4x) OR (30m burn > 6x AND 6h burn > 6x).

Achieve: Understand alert fatigue. Differentiate symptoms vs. causes alerts.

15:50 Logic & DSA: 1. Easy: Symmetric Tree.
2. Medium: Binary Tree Zigzag Level Order Traversal.

16:40 Closing Sprint:

Scenario: Refactoring 200+ noisy alerts down to 15 actionable ones using SLO methodology.

Career: LinkedIn Post: "The Anatomy of a Perfect Runbook (with Template)."

Day 20: Modern Observability Stack (VictoriaMetrics, Tempo, Pyroscope)

15:00 Technical Drill:

Watch: Efficient Go (O'Reilly) - Profiling & Modern Observability.
Link: https://learning.oreilly.com/library/view/efficient-go/9781098105709/

Execute:
- Part 1: Deploy VictoriaMetrics (Prometheus alternative at scale). Compare query performance and resource usage vs. Prometheus.
- Part 2: Set up Grafana Tempo for distributed tracing (Jaeger alternative). Configure trace-to-logs correlation.
- Part 3: Implement Pyroscope for continuous profiling. Generate CPU/heap flame graphs. Identify hot paths.

Achieve: Understand trade-offs: Prometheus vs. VictoriaMetrics (cost, scale, compatibility), Jaeger vs. Tempo (backend storage), commercial vs. open-source observability (Datadog, New Relic use cases).

15:50 Logic & DSA: 1. Easy: Merge Sorted Array (merging time-series from multiple sources).
2. Medium: Sort Colors (categorizing metrics by severity - P0/P1/P2).

16:40 Closing Sprint:

Scenario: Prometheus is OOMing due to high cardinality. Pitch migration to VictoriaMetrics. Calculate cost savings (compute + storage). Use Pyroscope to prove memory leak before prod OOM.

Career: LinkedIn Post: "How We Scaled Observability to 10M metrics/sec with VictoriaMetrics."

Day 21: Chaos Engineering & Fault Injection

15:00 Technical Drill:

Watch: Chaos Engineering (O'Reilly).
Link: https://learning.oreilly.com/library/view/chaos-engineering/9781492043850/

Execute: Use Chaos Mesh to inject network delay. Verify circuit breaker triggers. Validate graceful degradation.

Achieve: Understand Blast Radius, Steady State Hypothesis, Game Days.

15:50 Logic & DSA: 1. Easy: Pascals Triangle.
2. Medium: Unique Paths (Grid DP).

16:40 Closing Sprint:

Career: Portfolio Project #4: Build "Chaos Engineering Platform" - Beyond dashboard: experiment scheduler, hypothesis validator, blast radius calculator, automated rollback triggers. Integrates with Chaos Mesh/LitmusChaos. Features: pre-flight checks, steady-state validation, automated reports. Include real chaos experiments you ran (documented with screenshots, metrics before/after). Demonstrates production-readiness mindset.

---

# 🌍 WEEK 4: Architecture & Global Reliability

---

## Day 22: Load Balancing Algorithms & Health Checks

[⬆️ Back to Top](#-quick-navigation)

15:00 Technical Drill:

Watch: Web Scalability for Startup Engineers (Manning).
Link: https://www.manning.com/books/web-scalability-for-startup-engineers

Execute: Configure Envoy with weighted clusters. Simulate backend failure and observe circuit breaker (consecutive_5xx).

Achieve: Compare Round-Robin vs. Least-Request vs. Consistent Hash. Master active vs. passive health checks.

15:50 Logic & DSA: 1. Easy: Single Number.
2. Medium: Find Peak Element.

16:40 Closing Sprint:

Scenario: Debugging why 1% of requests fail: connection pool exhaustion vs. backend overload.

Career: LinkedIn Post: "5 Load Balancer Configs That Saved Us During Black Friday."

Day 23: Consistent Hashing & Sharding

15:00 Technical Drill:

Watch: Designing Data-Intensive Applications (O'Reilly) - Ch. 5.

Execute: Implement Consistent Hashing in Python. Compare migration % vs. $n \pmod N$ sharding.

Achieve: Understand Consistent Hashing as the backbone of CDNs/Load Balancers.

15:50 Logic & DSA: 1. Easy: Path Sum.
2. Medium: Subarray Sum Equals K (Prefix sum logic).

16:40 Closing Sprint:

Scenario: "Hot Key" shard issues: Pitching a "Virtual Node" solution.

Day 24: Cache Stampede & Mitigation

15:00 Technical Drill:

Watch: Caching Strategies in Distributed Systems (Pluralsight).
Link: https://www.pluralsight.com/courses/distributed-caching

Execute: Load test API. Expire hot key. Implement Probabilistic Early Re-computation to mitigate.

Achieve: Explain Cache-Aside vs. Write-Through vs. Write-Back risks.

15:50 Logic & DSA: 1. Easy: Lowest Common Ancestor of a BST.
2. Medium: Design Twitter (Combining OOD and DSA).

16:40 Closing Sprint:

Career: Enhancement to Project #3: Add caching strategy simulator to your Incident Management Platform showing cache stampede scenarios.

Day 25: Database Replication & Failover

15:00 Technical Drill:

Watch: Designing Data-Intensive Applications (O'Reilly) - Ch. 5.
Link: https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/

Execute: Set up Postgres streaming replication. Simulate primary failure. Measure RPO/RTO during promotion.

Achieve: Master synchronous vs. asynchronous replication trade-offs. Understand split-brain scenarios.

15:50 Logic & DSA: 1. Easy: Happy Number.
2. Medium: Word Break (DP with memoization).

16:40 Closing Sprint:

Scenario: Investigating replica lag during peak traffic: network saturation vs. write amplification.

Career: LinkedIn Post: "How We Achieved <5 Second RTO with Automated Postgres Failover."

Day 26: CDN Architecture & Edge Computing

15:00 Technical Drill:

Watch: Edge Computing in Practice (O'Reilly).
Link: https://learning.oreilly.com/library/view/learning-modern-linux/9781098108939/

Execute: Deploy Cloudflare Worker. Implement request coalescing at edge. Monitor cache HIT ratio.

Achieve: Understand PoP placement, Anycast routing, and TLS termination at edge.

15:50 Logic & DSA: 1. Easy: Isomorphic Strings.
2. Medium: LRU Cache (Implement doubly-linked list + HashMap).

16:40 Closing Sprint:

Scenario: Proving that 200ms latency is CDN cache miss (origin fetch) vs. actual origin slowness.

Day 27: Rate Limiting & API Gateway Patterns

15:00 Technical Drill:

Watch: Building Microservices, 2nd Ed (O'Reilly) - Ch. 11.
Link: https://learning.oreilly.com/library/view/building-microservices-2nd/9781492034018/

Execute: Implement Token Bucket in Redis. Compare Fixed Window vs. Sliding Window Log accuracy.

Achieve: Master distributed rate limiting (Redis vs. local limits). Understand 429 response strategies.

15:50 Logic & DSA: 1. Easy: Majority Element.
2. Medium: Container With Most Water.

16:40 Closing Sprint:

Scenario: Defending API quotas during DDoS vs. legitimate traffic spike (Olympics, Black Friday).

Career: LinkedIn Post: "Rate Limiting Algorithms Compared: Token Bucket vs. Leaky Bucket vs. Sliding Window."

Day 28: Multi-Region Deployments & Global Traffic Management

15:00 Technical Drill:

Watch: Cloud Native Infrastructure (O'Reilly) - Ch. 8.
Link: https://learning.oreilly.com/library/view/cloud-native-infrastructure/9781491984291/

Execute: Configure GeoDNS routing. Simulate region failure, observe traffic failover. Measure cross-region latency.

Achieve: Understand Active-Active vs. Active-Passive strategies. Master data sovereignty.

15:50 Logic & DSA: 1. Easy: Power of Two.
2. Medium: 3Sum (Two-pointer technique).

16:40 Closing Sprint:

Scenario: Deciding between Global Load Balancer vs. Regional Isolation for GDPR compliance.

Career: Portfolio Project #5 (Capstone): Build "SRE Platform Toolkit" - Your comprehensive portfolio site showcasing all 4 previous projects PLUS: Infrastructure-as-Code for entire deployment (Terraform for AWS/K8s), unified observability (Prometheus/Grafana/Loki), cost tracking, security scanning, uptime monitoring. This is your "full SRE platform" demonstration. Include architecture diagram, cost breakdown, SLO dashboard, incident history. Make this your GitHub profile README showcase.

Day 29: FinOps & Cloud Cost Optimization at Scale

15:00 Technical Drill:

Watch: The Art of Capacity Planning + Cloud FinOps (O'Reilly).
Link: https://learning.oreilly.com/library/view/cloud-finops/9781492054610/

Execute:
- Build capacity model: (Current RPS * Growth Rate) / (Resource Utilization Target). Forecast 6-month compute needs.
- Implement cost optimization: Identify idle resources (AWS Cost Explorer, Kubecost). Rightsize EC2 instances using CloudWatch metrics. Migrate to Graviton (ARM) for 20% savings.
- Calculate TCO: Reserved Instances vs. Savings Plans vs. Spot instances vs. On-Demand for various workload patterns.

Achieve: Master FinOps principles (unit economics, showback/chargeback, tagging strategy). Understand cloud waste categories: idle resources, over-provisioning, unattached volumes, old snapshots. Learn commitment strategies (1-year vs. 3-year RIs, Compute Savings Plans).

15:50 Logic & DSA: 1. Easy: Reverse Bits (cost bit-packing optimization).
2. Medium: Gas Station (optimal resource allocation - greedy algorithm maps to spot instance strategy).

16:40 Closing Sprint:

Scenario: CFO asks you to reduce $50K/month cloud bill without impacting SLOs. Present analysis: 30% savings from rightsizing, 25% from reserved instances, 20% from storage lifecycle policies, 15% from deleting zombie resources, 10% from Graviton migration. Include risk assessment for each.

Career: LinkedIn Post: "How We Reduced Cloud Costs by 40% Without Sacrificing Reliability (with exact numbers and tactics)."

Day 30: Mock SRE Interview (Technical + Behavioral) & Career Prep

15:00 Technical Drill (90 minutes - full interview simulation):

Review: Re-read all scenario solutions from Days 1-29. Extract patterns.
Link: https://github.com/mxssl/sre-interview-prep-guide

Execute - System Design Interview (45 min):
- "Design a URL shortener with 99.99% availability and 100M daily users."
- Cover: Requirements gathering, capacity estimation, API design, database choice (SQL vs. NoSQL), caching strategy, CDN, monitoring, SLOs, deployment strategy (multi-region), disaster recovery.
- Integrate all 4 weeks: Systems (Week 1), Cloud+K8s (Week 2), Observability+Security (Week 3), Architecture+FinOps (Week 4).

Execute - Behavioral Interview Practice (45 min):
Practice STAR method for these common questions:
1. "Tell me about your worst production outage and how you handled it."
2. "Describe a time you had a conflict with a teammate about technical approach."
3. "How do you prioritize when multiple P0 incidents occur simultaneously?"
4. "Tell me about a time you automated something that saved significant time/cost."
5. "Describe when you had to explain a complex technical issue to non-technical stakeholders."
6. "What's your approach to on-call rotations and preventing burnout?"
7. "Tell me about a time you made a mistake that caused an outage."

15:50 Logic & DSA (40 min - timed practice):
1. Medium: Longest Consecutive Sequence (dependency analysis).
2. Hard: Trapping Rain Water (resource pooling/buffering - maps to capacity planning).

16:40 Closing Sprint (20 min):

Career Finalization:
- ✅ Update resume: List all 5 hire-worthy projects, quantify impact ("Reduced deploy time by 60%", "Saved $50K/year")
- ✅ Polish LinkedIn: Headline "SRE | Kubernetes • Terraform • AWS | Specialized in Observability & FinOps"
- ✅ Draft "30-Day SRE Journey" post with before/after technical skills matrix
- ✅ Prepare 3 technical stories and 3 behavioral stories for interviews
- ✅ List of companies to target with specific SRE roles

Final Reflection:
Write 1-page summary covering:
- "What I'd do differently in my next on-call shift"
- "My strongest technical areas vs. areas needing more practice"
- "How I'll continue learning beyond these 30 days"
- "My unique value proposition as an SRE candidate"

---

## 🏖️ Sunday: Rest Day (Canvas Holiday)

[⬆️ Back to Top](#-quick-navigation)

Full recovery. No technical input. No terminal. Brain plasticity consolidation.

---
---

# 📚 Additional Resources & Links

[⬆️ Back to Top](#-quick-navigation)

### Core Books (O'Reilly Learning Platform)
- Site Reliability Engineering: https://sre.google/sre-book/table-of-contents/
- The Site Reliability Workbook: https://sre.google/workbook/table-of-contents/
- Systems Performance, 2nd Ed (Brendan Gregg): https://learning.oreilly.com/library/view/systems-performance-2nd/9780136821694/
- Designing Data-Intensive Applications (Martin Kleppmann): https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/

### Cloud Platforms & Infrastructure
- **AWS**:
  - AWS Well-Architected Framework: https://aws.amazon.com/architecture/well-architected/
  - AWS Solutions Library: https://aws.amazon.com/solutions/
  - AWS Observability Best Practices: https://aws-observability.github.io/observability-best-practices/
- **GCP**:
  - GCP SRE Book (Google's internal practices): https://sre.google/books/
  - GCP Architecture Center: https://cloud.google.com/architecture
- **Multi-Cloud**:
  - Cloud Native Infrastructure (O'Reilly): https://learning.oreilly.com/library/view/cloud-native-infrastructure/9781491984291/

### Infrastructure as Code (IaC)
- **Terraform**:
  - Terraform: Up & Running (O'Reilly): https://learning.oreilly.com/library/view/terraform-up/9781098116736/
  - Terraform Best Practices: https://www.terraform-best-practices.com/
  - HashiCorp Learn: https://developer.hashicorp.com/terraform/tutorials
- **Alternative IaC Tools**:
  - Pulumi: https://www.pulumi.com/docs/
  - AWS CDK: https://docs.aws.amazon.com/cdk/

### CI/CD & GitOps
- **CI/CD Pipelines**:
  - Continuous Delivery (O'Reilly): https://learning.oreilly.com/library/view/continuous-delivery/9780136892656/
  - GitHub Actions Documentation: https://docs.github.com/en/actions
  - GitLab CI/CD: https://docs.gitlab.com/ee/ci/
- **GitOps**:
  - ArgoCD Documentation: https://argo-cd.readthedocs.io/
  - Flux Documentation: https://fluxcd.io/docs/
  - GitOps Principles: https://opengitops.dev/

### Kubernetes Deep Dive
- Production Kubernetes: https://learning.oreilly.com/library/view/production-kubernetes/9781492092292/
- Kubernetes Patterns: https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050285/
- Programming Kubernetes: https://learning.oreilly.com/library/view/programming-kubernetes/9781492047094/
- Kubernetes Security: https://learning.oreilly.com/library/view/kubernetes-security/9781492039075/

### Security & DevSecOps
- **Container Security**:
  - Container Security (O'Reilly): https://learning.oreilly.com/library/view/container-security/9781492056690/
  - Falco Documentation: https://falco.org/docs/
  - Trivy: https://aquasecurity.github.io/trivy/
- **Policy & Compliance**:
  - Open Policy Agent (OPA): https://www.openpolicyagent.org/docs/
  - Gatekeeper: https://open-policy-agent.github.io/gatekeeper/
  - Pod Security Standards: https://kubernetes.io/docs/concepts/security/pod-security-standards/
- **Secrets Management**:
  - External Secrets Operator: https://external-secrets.io/
  - HashiCorp Vault: https://www.vaultproject.io/docs
  - AWS Secrets Manager: https://docs.aws.amazon.com/secretsmanager/

### Observability & Monitoring
- **Core Observability**:
  - Prometheus: Up & Running: https://learning.oreilly.com/library/view/prometheus-up/9781492034131/
  - Observability Engineering: https://learning.oreilly.com/library/view/observability-engineering/9781492076438/
  - Distributed Tracing in Practice: https://learning.oreilly.com/library/view/distributed-tracing-in/9781492056621/
- **Modern Alternatives**:
  - VictoriaMetrics: https://victoriametrics.com/
  - Grafana Tempo: https://grafana.com/oss/tempo/
  - Grafana Loki: https://grafana.com/oss/loki/
- **Continuous Profiling**:
  - Pyroscope: https://pyroscope.io/docs/
  - Parca: https://www.parca.dev/
- **Commercial Platforms** (for comparison):
  - Datadog: https://docs.datadoghq.com/
  - New Relic: https://docs.newrelic.com/

### Performance & Debugging
- BPF Performance Tools (Brendan Gregg): https://www.brendangregg.com/bpf-performance-tools-book.html
- Linux Performance: https://www.brendangregg.com/linuxperf.html
- USE Method: https://www.brendangregg.com/usemethod.html
- bpftrace Tools: https://github.com/iovisor/bpftrace

### FinOps & Cost Optimization
- Cloud FinOps (O'Reilly): https://learning.oreilly.com/library/view/cloud-finops/9781492054610/
- FinOps Foundation: https://www.finops.org/
- Kubecost: https://www.kubecost.com/
- AWS Cost Optimization: https://aws.amazon.com/aws-cost-management/cost-optimization/
- The Art of Capacity Planning: https://learning.oreilly.com/library/view/the-art-of-capacity/9780596518578/

### Incident Management & On-Call
- PagerDuty Incident Response: https://response.pagerduty.com/
- Atlassian Incident Management Handbook: https://www.atlassian.com/incident-management/handbook
- Blameless SRE: https://www.blameless.com/sre
- Postmortem Culture (Etsy): https://www.etsy.com/codeascraft/blameless-postmortems

### Practice Platforms
- **Coding Practice**:
  - LeetCode: https://leetcode.com/
  - HackerRank (SRE-specific problems): https://www.hackerrank.com/
- **System Design**:
  - System Design Primer: https://github.com/donnemartin/system-design-primer
  - ByteByteGo (Paid but excellent): https://bytebytego.com/
  - System Design Interview (Book): https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF
- **Interview Prep**:
  - SRE Interview Prep Guide: https://github.com/mxssl/sre-interview-prep-guide
  - Grokking the System Design Interview: https://www.educative.io/courses/grokking-the-system-design-interview

### Labs & Hands-On
- **Interactive Environments**:
  - Killercoda (Interactive Linux/K8s): https://killercoda.com/
  - Instruqt: https://instruqt.com/
  - AWS Workshops: https://workshops.aws/
- **Self-Hosted Labs**:
  - Kubernetes The Hard Way: https://github.com/kelseyhightower/kubernetes-the-hard-way
  - Terraform Examples: https://github.com/hashicorp/terraform-provider-aws/tree/main/examples
- **Chaos Engineering**:
  - Chaos Mesh: https://chaos-mesh.org/
  - LitmusChaos: https://litmuschaos.io/
  - AWS Fault Injection Simulator: https://aws.amazon.com/fis/
- **Observability Demos**:
  - OpenTelemetry Demo: https://github.com/open-telemetry/opentelemetry-demo
  - Prometheus Demo: https://github.com/prometheus/demo

### Communities & Blogs
- **Newsletters**:
  - SRE Weekly: https://sreweekly.com/
  - DevOps Weekly: https://www.devopsweekly.com/
  - Last Week in AWS: https://www.lastweekinaws.com/
- **Blogs & Learning**:
  - Brendan Gregg's Blog: https://www.brendangregg.com/blog/
  - Julia Evans (Debugging & Linux): https://jvns.ca/
  - Google SRE Resources: https://sre.google/resources/
  - HashiCorp Blog: https://www.hashicorp.com/blog
  - CNCF Blog: https://www.cncf.io/blog/
- **Communities**:
  - CNCF Slack: https://slack.cncf.io/
  - SRE Slack: https://sre.community/
  - DevOps Subreddit: https://www.reddit.com/r/devops/
  - r/kubernetes: https://www.reddit.com/r/kubernetes/
- **Landscape & Tools**:
  - CNCF Landscape: https://landscape.cncf.io/
  - DevOps Roadmap: https://roadmap.sh/devops
  - SRE Roadmap: https://roadmap.sh/devops (SRE path)

---
---

## 💼 2026 Job Market Enhancements - What's New

[⬆️ Back to Top](#-quick-navigation)

This guide has been enhanced based on 30 years of teaching experience and 2026 hiring trends:

### Key Additions

**Week 1** - Now includes:
- ☁️ AWS/GCP cloud fundamentals (VPC, IAM, EC2, CloudWatch)
- 🌐 Cloud networking alongside TCP internals
- 💰 Cloud cost optimization mindset from Day 1

**Week 2** - Enhanced with:
- 🏗️ Terraform Infrastructure as Code (critical hiring filter)
- 🔄 CI/CD pipelines with GitHub Actions
- 🔒 DevSecOps: security scanning, SBOM, supply chain security
- 📦 GitOps with ArgoCD
- 🔐 Advanced secrets management (Vault, External Secrets Operator)

**Week 3** - Upgraded with:
- 🛡️ Container security (Falco, OPA/Gatekeeper, Trivy)
- 📊 Modern observability alternatives (VictoriaMetrics, Tempo, Pyroscope)
- 🗣️ Incident communication and stakeholder management
- 💬 Soft skills: translating technical to business impact

**Week 4** - Enhanced with:
- 💵 Deep FinOps: cloud cost optimization strategies
- 🎭 Behavioral interview preparation (STAR method)
- 📝 Complete mock interview (technical + behavioral)
- 🎯 Career finalization and job search strategy

### Portfolio Projects Transformation
Changed from "hobby projects" to **hire-worthy demonstrations**:
- ❌ Before: "Build a dashboard" → ✅ After: "K8s FinOps Dashboard with cost allocation and savings recommendations"
- ❌ Before: "Simple pipeline" → ✅ After: "Production-grade CI/CD with security gates and DORA metrics"
- ❌ Before: "Postmortem generator" → ✅ After: "Incident Management Platform with PagerDuty integration"

### Why These Changes Matter
1. **Cloud expertise is mandatory** - SRE roles assume cloud knowledge
2. **IaC is a hiring filter** - If you can't write Terraform, you won't pass phone screens
3. **Security is everyone's responsibility** - DevSecOps is table stakes in 2026
4. **Cost optimization is critical** - Every SRE interview asks about FinOps
5. **Soft skills differentiate** - Technical depth + communication = senior SRE
6. **Portfolio proves capability** - "Show don't tell" with production-grade projects

### How to Use This Enhanced Guide

**If you're starting fresh:**
- Follow all 30 days sequentially
- Complete ALL 5 portfolio projects
- Focus equal time on technical + soft skills

**If you already know some topics:**
- **Strong in Linux?** Skim Week 1 Days 1-2, focus on cloud additions (Days 3-7)
- **Already know K8s?** Focus on Week 2's IaC and CI/CD (Days 11-14)
- **Observability expert?** Speed through Week 3 basics, focus on modern alternatives and security

**Time-constrained?**
Priority order for job search:
1. **Week 2** (IaC + CI/CD) - Most asked in interviews
2. **Week 4** (Day 29-30) - FinOps + Interview prep
3. **Portfolio Projects** - Start these ASAP, build throughout 30 days
4. **Week 1** (Systems + Cloud)
5. **Week 3** (Observability + Security)

---

## 🎯 Success Metrics - 2026 Job Market Ready

By Day 30, you should be able to:

### Technical Skills
- ✅ **Systems & Debugging**: Debug production issues using strace, eBPF, and distributed tracing
- ✅ **Cloud Platforms**: Deploy and manage AWS/GCP infrastructure with VPC, IAM, EC2, observability
- ✅ **Infrastructure as Code**: Write production-grade Terraform with modules, state management, and best practices
- ✅ **Kubernetes**: Understand K8s internals, security (RBAC, secrets, OPA), networking (CNI), and storage (CSI)
- ✅ **CI/CD & GitOps**: Build complete pipelines with security gates, implement GitOps with ArgoCD
- ✅ **Security**: Implement container security (Falco, OPA), secrets management, zero-trust principles
- ✅ **Observability**: Design SLOs with error budgets, implement modern observability stack (Prometheus/VictoriaMetrics, Tempo, Loki, Pyroscope)
- ✅ **Architecture**: Design multi-region systems with 99.99% availability, caching strategies, load balancing
- ✅ **FinOps**: Optimize cloud costs, calculate TCO, pitch rightsizing and commitment strategies
- ✅ **Algorithms**: Solve 60+ LeetCode problems (mix of Easy/Medium, contextualized to SRE scenarios)

### Soft Skills & Interview Readiness
- ✅ **Incident Management**: Lead incident response, communicate with stakeholders, write blameless postmortems
- ✅ **Communication**: Translate technical issues to business impact for executives
- ✅ **Behavioral Interviews**: Answer 7+ common questions using STAR method with quantified impact
- ✅ **System Design**: Complete end-to-end system design interviews covering requirements, capacity, monitoring, cost
- ✅ **Technical Storytelling**: Have 3 technical stories and 3 behavioral stories ready for interviews

### Portfolio & Career
- ✅ **5 Hire-Worthy Projects**: Complete production-grade projects demonstrating SRE expertise:
  1. K8s FinOps Dashboard (cost optimization)
  2. Production CI/CD Pipeline (DevSecOps)
  3. Incident Management Platform (soft skills + technical)
  4. Chaos Engineering Platform (reliability engineering)
  5. SRE Platform Toolkit (capstone - full stack)
- ✅ **GitHub Profile**: Portfolio site showcasing all projects with architecture diagrams, metrics, ROI
- ✅ **LinkedIn Optimization**: Professional headline, quantified achievements, technical posts
- ✅ **Resume**: Updated with measurable impact ("Reduced costs by 40%", "Improved deployment frequency by 10x")

### What Makes This Guide Job-Market Ready (2026)
1. **Cloud-First**: Integrates AWS/GCP throughout (not just K8s in isolation)
2. **IaC Required**: Terraform is a hiring filter - you'll master it
3. **Security Embedded**: DevSecOps practices are table stakes
4. **FinOps Expertise**: Cost optimization is everyone's job now
5. **Real-World Projects**: Portfolio projects that impress hiring managers
6. **Communication Skills**: Technical + soft skills combination
7. **Interview Ready**: Behavioral + technical + system design coverage
8. **Modern Stack**: Current tools (VictoriaMetrics, Tempo, ArgoCD, OPA)

**Remember**: Consistency > Intensity. The daily routine builds mastery through repetition and deliberate practice.

**Job Search Strategy**: Target companies with mature SRE practices (FAANG, unicorn startups, FinTech). Highlight your portfolio in applications. Use LinkedIn to connect with SRE hiring managers at target companies.

---
---

# 📋 APPENDICES

---

## 📋 APPENDIX A: Complete Interview Question Bank

[⬆️ Back to Top](#-quick-navigation)

### Systems & Linux (Week 1)

**Process Management**:
1. Explain the lifecycle of a process from fork() to exit()
2. What's the difference between fork(), vfork(), and clone()?
3. How do you debug a zombie process? What causes them?
4. Explain COW (Copy-on-Write) in fork()
5. What's the difference between SIGTERM and SIGKILL?

**I/O & Storage**:
1. Explain the difference between buffered and unbuffered I/O
2. What happens when you run out of inodes but have disk space?
3. How does fsync() impact database performance?
4. Explain the page cache and when it gets flushed
5. What's the difference between read() and mmap()?

**Networking**:
1. Explain TCP 3-way handshake and 4-way termination
2. What is TCP congestion control? Explain CUBIC vs BBR
3. How do you debug packet loss vs. high latency?
4. Explain the difference between Security Groups and NACLs in AWS
5. What's the difference between NAT Gateway and Internet Gateway?

**Memory Management**:
1. Explain the difference between RSS, VSZ, and USS
2. How does the OOM killer decide which process to kill?
3. What's the difference between anonymous and file-backed memory?
4. Explain memory overcommit and vm.overcommit_memory settings
5. How do you detect a memory leak in production?

### Kubernetes & Cloud (Week 2)

**Kubernetes Internals**:
1. Explain the role of kubelet, kube-proxy, and kube-scheduler
2. How does service discovery work in Kubernetes?
3. What happens when you run `kubectl apply -f deployment.yaml`?
4. Explain pod eviction and priority classes
5. How do you debug a pod stuck in Pending state?

**Networking**:
1. Explain how pod-to-pod communication works across nodes
2. What's the difference between ClusterIP, NodePort, and LoadBalancer?
3. How does CNI plugin work? Compare Calico vs Flannel
4. Explain network policies and their limitations
5. How do you debug DNS resolution issues in pods?

**Infrastructure as Code**:
1. Explain Terraform state locking and why it matters
2. How do you handle secrets in Terraform?
3. What's the difference between terraform plan and terraform apply?
4. Explain resource dependencies and depends_on
5. How do you import existing infrastructure into Terraform?

**CI/CD & GitOps**:
1. Explain the difference between CI and CD
2. How do you implement blue-green deployment vs canary?
3. What are the security risks in CI/CD pipelines?
4. Explain GitOps vs traditional CD
5. How do you handle secrets in GitHub Actions?

### Observability & Security (Week 3)

**Metrics & Monitoring**:
1. Explain the four golden signals (latency, traffic, errors, saturation)
2. What's the difference between RED and USE methods?
3. How do you calculate percentiles (p50, p95, p99)?
4. Explain cardinality and why it matters in Prometheus
5. What's the difference between counter, gauge, and histogram?

**SLOs & Error Budgets**:
1. How do you calculate error budget from SLO?
2. Explain the difference between SLI, SLO, and SLA
3. What's a burn rate alert?
4. How do you choose appropriate SLO targets?
5. What happens when you exceed your error budget?

**Security**:
1. Explain the principle of least privilege
2. How do admission controllers work in Kubernetes?
3. What's the difference between RBAC and ABAC?
4. Explain mTLS and service mesh security
5. How do you scan containers for vulnerabilities?

**Incident Management**:
1. What's your process when you get paged at 3 AM?
2. Explain the incident commander role
3. How do you write a blameless postmortem?
4. What's the difference between P0, P1, P2 incidents?
5. How do you prevent incident alert fatigue?

### Architecture & Scale (Week 4)

**Distributed Systems**:
1. Explain CAP theorem with real examples
2. What's the difference between eventual and strong consistency?
3. How does consistent hashing work?
4. Explain the two-generals problem
5. How do you handle distributed transactions?

**Caching**:
1. Explain cache stampede and mitigation strategies
2. What's the difference between cache-aside and write-through?
3. How do you invalidate cache in a distributed system?
4. Explain cache warming and when to use it
5. How do you debug cache hit ratio issues?

**Database & Storage**:
1. Explain the difference between replication and sharding
2. How do you handle database failover?
3. What's the difference between RPO and RTO?
4. Explain read replicas and their use cases
5. How do you handle schema migrations at scale?

**Cost & Capacity**:
1. How do you calculate cost per transaction?
2. Explain the difference between RI, Savings Plans, and Spot
3. How do you forecast capacity 6 months out?
4. What metrics indicate saturation?
5. How do you rightrightsize EC2 instances?

---

## 📋 APPENDIX B: Certification Paths

[⬆️ Back to Top](#-quick-navigation)

### Recommended Certification Order

**1. AWS Certifications** (High ROI, most requested)
- ☁️ **AWS Solutions Architect Associate**
  - Cost: $150
  - Study time: 40-60 hours
  - Resource: https://acloudguru.com/ or https://learn.cantrill.io/
  - Why: Foundational cloud knowledge, covers VPC, IAM, EC2, RDS

- 🔧 **AWS SysOps Administrator Associate**
  - Cost: $150
  - Study time: 30-40 hours (after SA-A)
  - Resource: https://acloudguru.com/
  - Why: Operational focus, CloudWatch, Systems Manager

- 💼 **AWS DevOps Engineer Professional** (Optional but valuable)
  - Cost: $300
  - Study time: 60-80 hours
  - Resource: https://acloudguru.com/
  - Why: CI/CD, IaC, monitoring - perfect for SRE

**2. Kubernetes Certifications**
- ⎈ **Certified Kubernetes Administrator (CKA)**
  - Cost: $395 (includes 1 retake)
  - Study time: 40-60 hours
  - Resource: https://killer.sh/ (practice exam), https://kodekloud.com/
  - Why: Most recognized K8s cert, hands-on performance-based
  - Exam: 2 hours, 15-20 performance tasks

- 🔒 **Certified Kubernetes Security Specialist (CKS)**
  - Cost: $395
  - Prerequisite: CKA
  - Study time: 30-40 hours
  - Resource: https://killer.sh/, https://kodekloud.com/
  - Why: Security is critical, shows depth

**3. HashiCorp Terraform**
- 🏗️ **Terraform Associate**
  - Cost: $70.50
  - Study time: 20-30 hours
  - Resource: https://developer.hashicorp.com/terraform/tutorials/certification
  - Why: IaC expertise, relatively easy cert

**4. Linux Foundation** (Optional)
- 🐧 **Linux Foundation Certified System Administrator (LFCS)**
  - Cost: $395
  - Study time: 40-60 hours
  - Resource: https://training.linuxfoundation.org/
  - Why: Proves Linux expertise

### Certification ROI Analysis

| Certification | Cost | Time | Job Postings Mentioning | Salary Impact |
|--------------|------|------|------------------------|---------------|
| AWS SA-A | $150 | 50h | 67% | +$8-12K |
| CKA | $395 | 50h | 45% | +$10-15K |
| AWS DevOps Pro | $300 | 70h | 28% | +$15-20K |
| CKS | $395 | 35h | 12% | +$5-8K |
| Terraform | $71 | 25h | 35% | +$5-7K |

**Recommended Strategy**:
- Month 1-2: Complete this 30-day guide
- Month 3: AWS Solutions Architect Associate
- Month 4: CKA (Kubernetes)
- Month 5: AWS SysOps or DevOps Pro
- Month 6: Job search with 2-3 certs

---

## 📋 APPENDIX C: Detailed Portfolio Project Specifications

[⬆️ Back to Top](#-quick-navigation)

### Project #1: Kubernetes FinOps Dashboard

**Tech Stack**:
- **Frontend**: React + TypeScript + Recharts + TailwindCSS
- **Backend**: FastAPI (Python) + Redis
- **Data Source**: Kubecost API, Prometheus
- **Deployment**: GitHub Pages (frontend), AWS Lambda (backend), CloudFront

**Features to Implement**:
1. **Cost Breakdown**:
   - Per namespace cost allocation
   - Per pod cost (CPU, memory, storage, network)
   - Trend over 30 days
   - Idle resource cost (pods with <10% utilization)

2. **Savings Recommendations**:
   - Overprovisioned pods (requests > usage)
   - Idle pods (no traffic in 24h)
   - Spot instance opportunities
   - Reserved instance recommendations
   - Estimated savings per recommendation

3. **Resource Efficiency Score**:
   - Cluster efficiency: `(actual usage / requested resources) * 100`
   - Color-coded: Green (>70%), Yellow (40-70%), Red (<40%)
   - Historical trend

4. **Alerting**:
   - Slack webhook when monthly cost exceeds budget
   - Email digest weekly

**Architecture Diagram**: Include in README
```
[Prometheus] → [Kubecost] → [FastAPI] → [Redis Cache] → [React UI]
     ↓                                                        ↓
[K8s Cluster]                                        [CloudFront + S3]
```

**GitHub README Must Include**:
- Architecture diagram
- Cost savings methodology
- Screenshots with real data
- ROI calculation: "Saved $12K/year by identifying idle resources"
- Setup instructions (< 5 minutes)
- Live demo link

**Sample Repos**:
- https://github.com/kubecost/cost-analyzer-helm-chart
- https://github.com/kubernetes-sigs/usage-metrics-collector

---

### Project #2: Production-Grade CI/CD Template

**Tech Stack**:
- **CI/CD**: GitHub Actions
- **Security**: Trivy, Snyk, gitleaks, Cosign
- **IaC**: Terraform
- **Deployment**: ArgoCD to K8s
- **Monitoring**: GitHub deployment badges

**Pipeline Stages** (`.github/workflows/main.yml`):
```yaml
1. Code Quality:
   - Linting (eslint, golangci-lint)
   - Unit tests (coverage >80%)
   - Integration tests

2. Security Scanning:
   - Secret scanning (gitleaks)
   - Dependency scanning (Snyk)
   - Container scanning (Trivy)
   - SAST (Semgrep)

3. Build & Sign:
   - Build Docker image
   - Generate SBOM (syft)
   - Sign with Cosign
   - Push to registry

4. Deploy:
   - Update ArgoCD app manifest
   - Wait for health check
   - Run smoke tests
   - Rollback on failure

5. Notify:
   - Slack notification
   - Update GitHub deployment status
```

**Branch Protection Rules**:
- Require pull request reviews (2)
- Require status checks (all tests pass)
- Require signed commits
- No force push to main

**DORA Metrics Dashboard**:
Track in README:
- Deployment frequency: X times/day
- Lead time: Y minutes (commit to production)
- MTTR: Z minutes
- Change failure rate: W%

**Sample Repos**:
- https://github.com/kelseyhightower/app
- https://github.com/GoogleContainerTools/skaffold/tree/main/examples

---

### Project #3: Incident Management Platform

**Tech Stack**:
- **Backend**: FastAPI + PostgreSQL + Redis
- **Frontend**: Next.js + TypeScript + Mantine UI
- **Integrations**: PagerDuty webhook, Slack API, Jira API
- **Auth**: Auth0 or AWS Cognito
- **Deployment**: AWS ECS Fargate + RDS

**Core Features**:

1. **Incident Creation** (PagerDuty webhook):
   - Auto-create Slack channel (#incident-12345)
   - Auto-invite on-call team
   - Create Jira ticket
   - Start timeline

2. **Incident Timeline**:
   - Auto-log all Slack messages
   - Manual milestones (mitigation started, root cause found)
   - Attach screenshots, logs, metrics
   - Timestamp everything

3. **Severity Calculator**:
   - Input: Affected users, revenue impact, duration
   - Output: P0/P1/P2/P3 with justification
   - Auto-escalate if P0 + duration > 1 hour

4. **Executive Summary Generator** (AI-powered):
   - Input: Technical timeline
   - Output: Business-friendly summary
   - Example: "Database replication lag" → "Payment processing delayed 3 min, no data loss, resolved 15:30 PT"

5. **Postmortem Template**:
   - What happened? (timeline)
   - Root cause (5 whys analysis)
   - Action items (with Jira links)
   - What went well / What to improve

6. **Metrics Dashboard**:
   - MTTR trend
   - Incidents by severity
   - Top 5 root causes
   - On-call load by team

**Database Schema**:
```sql
incidents: id, title, severity, status, created_at, resolved_at
timeline: id, incident_id, timestamp, event_type, description
actions: id, incident_id, title, owner, jira_link, status
```

**Sample Repos**:
- https://github.com/Netflix/dispatch
- https://github.com/pagerduty/go-pagerduty

---

### Project #4: Chaos Engineering Platform

**Tech Stack**:
- **Backend**: Go + Kubernetes client-go
- **Frontend**: React + TypeScript + D3.js
- **Chaos Engine**: Chaos Mesh or LitmusChaos
- **Storage**: PostgreSQL
- **Deployment**: K8s operator

**Features**:

1. **Experiment Scheduler**:
   - Define chaos experiments via UI
   - Schedule experiments (cron expression)
   - Blast radius controls (namespace, labels)
   - Auto-rollback if steady state violated

2. **Experiment Types**:
   - Pod failure (kill random pod)
   - Network delay (100ms latency)
   - Network partition (isolate service)
   - CPU stress (consume 80% CPU)
   - Memory stress (consume 80% memory)
   - DNS failure (corrupt DNS responses)

3. **Steady State Validation**:
   - Define health checks (Prometheus queries)
   - Auto-abort if SLO violated
   - Example: `rate(http_requests_total{code=~"5.."}[5m]) < 0.01`

4. **Hypothesis Tracking**:
   - "If we kill payment-service pod, requests should failover in <1s"
   - Track: Pass / Fail / Inconclusive
   - Generate report with metrics

5. **Safety Controls**:
   - Dry-run mode
   - Manual approval for production
   - Auto-rollback triggers
   - Blast radius percentage (max 20% pods)

6. **Report Generation**:
   - Metrics before/during/after
   - Screenshots of dashboards
   - Findings and action items
   - Share via Slack

**Sample Repos**:
- https://github.com/chaos-mesh/chaos-mesh
- https://github.com/litmuschaos/litmus
- https://github.com/bloomberg/powerfulseal

---

### Project #5: SRE Platform Toolkit (Capstone)

**Overview**: Unified portfolio site showcasing all 4 projects + infrastructure

**Tech Stack**:
- **IaC**: Terraform (AWS VPC, EKS, RDS, S3, CloudFront)
- **Kubernetes**: EKS + ArgoCD
- **Monitoring**: Prometheus + Grafana + Loki + Tempo
- **Costs**: Kubecost
- **Security**: Falco + OPA Gatekeeper
- **CI/CD**: GitHub Actions
- **Frontend**: Next.js portfolio site

**What to Showcase**:

1. **Architecture Diagram**:
   - AWS services used
   - K8s cluster layout
   - Data flow
   - Security boundaries
   - DR strategy

2. **Live Dashboards** (embedded iframes):
   - Grafana: Cluster metrics
   - Kubecost: Cost breakdown
   - ArgoCD: Deployment history
   - Uptime: 99.9% SLA

3. **Terraform Modules**:
   - `modules/vpc/` - Reusable VPC with public/private subnets
   - `modules/eks/` - EKS cluster with OIDC
   - `modules/rds/` - RDS with read replicas
   - `environments/prod/` - Production config

4. **Cost Breakdown Table**:
   | Service | Monthly Cost | Optimization |
   |---------|-------------|--------------|
   | EKS | $72 | Spot nodes (-40%) |
   | RDS | $45 | Reserved instance (-30%) |
   | NAT Gateway | $32 | Single NAT (-50%) |
   | Total | **$149/mo** | Savings: $89/mo |

5. **SLO Dashboard**:
   - Availability: 99.9% (43.2 min downtime/month)
   - Latency: p95 < 200ms
   - Error rate: < 0.1%
   - Show 30-day history

6. **Incident Log**:
   - Table of past incidents (even simulated ones)
   - RCA documents
   - MTTR trend

**README Structure**:
```markdown
# SRE Platform Toolkit

## Overview
Fully automated, production-ready SRE platform demonstrating:
- IaC with Terraform
- GitOps with ArgoCD
- Observability (metrics, logs, traces)
- Cost optimization
- Security hardening
- CI/CD pipelines

## Architecture
[Diagram]

## Projects Hosted
1. K8s FinOps Dashboard - [Live Demo]
2. Incident Management Platform - [Live Demo]
3. Chaos Engineering Platform - [Live Demo]
4. CI/CD Template - [GitHub]

## Cost Analysis
Total monthly cost: $149
Optimizations applied: [List]
ROI: Demonstrates $50K+/year savings potential

## Setup
`terraform apply` - 15 minutes to full deployment

## SLOs
- Availability: 99.9%
- P95 latency: <200ms
- Error rate: <0.1%

[30-day uptime graph]

## Technologies
AWS | Kubernetes | Terraform | ArgoCD | Prometheus | Grafana
```

**GitHub Profile README**:
Make this the highlight of your GitHub profile with:
- Pinned repository
- Badges (build status, uptime, cost)
- GIFs of the UI
- Link to live portfolio site

---

## 📋 APPENDIX D: Common Production Troubleshooting Scenarios

[⬆️ Back to Top](#-quick-navigation)

### Scenario 1: High CPU But Low Application Load

**Symptoms**:
- `top` shows 80% CPU
- Application reports low request rate
- Users report slow response times

**Debugging Steps**:
```bash
# 1. Identify the process
top -b -n 1 | head -20

# 2. Check thread-level CPU
top -H -p <PID>

# 3. Check for high system time (sy%) vs user time (us%)
# High system time → kernel issue (networking, I/O)
# High user time → application code issue

# 4. Profile with perf
sudo perf top -p <PID>

# 5. Check for CPU throttling
cat /sys/fs/cgroup/cpu/cpu.stat  # Kubernetes
```

**Common Root Causes**:
- GC thrashing (Java/Go)
- Busy-wait loops
- CPU throttling in containers
- Context switching (too many threads)

**Resolution Examples**:
- Increase heap size (Java: `-Xmx`)
- Fix busy-wait → use proper blocking
- Increase CPU limits in K8s
- Reduce thread count

---

### Scenario 2: OOMKilled Pods in Kubernetes

**Symptoms**:
- Pods restart frequently
- `kubectl get pods` shows `OOMKilled`
- Application logs cut off abruptly

**Debugging Steps**:
```bash
# 1. Check pod events
kubectl describe pod <pod-name>
# Look for: "Container killed (OOMKilled)"

# 2. Check memory limit vs usage
kubectl top pod <pod-name>

# 3. Check if limit < request (anti-pattern!)
kubectl get pod <pod-name> -o yaml | grep -A5 resources

# 4. Check node memory pressure
kubectl top nodes

# 5. Review application memory profile
# For Java: jmap -heap <PID>
# For Python: memory_profiler
# For Go: pprof heap
```

**Common Root Causes**:
- Memory leak
- Under-provisioned limits
- Burst traffic spike
- Large in-memory cache

**Resolution Examples**:
- Increase memory limit: `resources.limits.memory: 2Gi`
- Fix memory leak (profile + fix)
- Implement proper caching (LRU with size limit)
- Add HPA for burst scaling

---

### Scenario 3: Database Replication Lag

**Symptoms**:
- Read replicas show stale data
- `SHOW SLAVE STATUS` shows `Seconds_Behind_Master: 300`
- Application reports inconsistent data

**Debugging Steps**:
```sql
-- 1. Check replication status (MySQL/PostgreSQL)
SHOW SLAVE STATUS\G  -- MySQL
SELECT * FROM pg_stat_replication;  -- PostgreSQL

-- 2. Check binary log size and growth rate
SHOW BINARY LOGS;  -- MySQL

-- 3. Check replica I/O and SQL thread status
-- If SQL thread slow → replica can't keep up
-- If I/O thread slow → network/primary issue

-- 4. Check slow queries on replica
SELECT * FROM mysql.slow_log ORDER BY query_time DESC LIMIT 10;
```

**Common Root Causes**:
- Heavy writes on primary
- Slow disk on replica
- Long-running queries on replica (blocking replication)
- Network latency between primary and replica

**Resolution Examples**:
- Upgrade replica instance type
- Optimize slow queries
- Consider parallel replication (MySQL 5.7+)
- Add read replicas to distribute load
- Use async replication with caution

---

### Scenario 4: Intermittent 5xx Errors (1% failure rate)

**Symptoms**:
- Overall error rate: 1% (acceptable but suspicious)
- No clear pattern in logs
- Load balancer health checks pass
- Some users report failures, others don't

**Debugging Steps**:
```bash
# 1. Check error distribution
# Group by: Time, endpoint, pod, node, user
kubectl logs -l app=backend | grep "500" | jq '.timestamp, .endpoint, .pod'

# 2. Check if errors correlate with:
# - Deployments
kubectl get events --field-selector type=Warning

# - Pod restarts
kubectl get pods -o json | jq '.items[] | select(.status.restartCount > 0)'

# - Specific backend pods
for pod in $(kubectl get pods -l app=backend -o name); do
  echo $pod
  kubectl logs $pod | grep -c "500"
done

# 3. Check connection pool exhaustion
# Java: JMX metrics
# Go: /debug/pprof/
# Python: # connections in logs

# 4. Check network issues
# Packet loss? Timeouts?
kubectl exec -it <pod> -- ping <other-service>
```

**Common Root Causes**:
- One bad pod (outdated code, corrupted state)
- Connection pool exhaustion
- Database connection timeouts
- Race condition under concurrency

**Resolution Examples**:
- Rolling restart (fixes stale state)
- Increase connection pool size
- Add retries with exponential backoff
- Add circuit breaker pattern

---

### Scenario 5: Prometheus Disk Full

**Symptoms**:
- Prometheus pod in `CrashLoopBackOff`
- Logs: "no space left on device"
- Grafana dashboards show "No data"

**Debugging Steps**:
```bash
# 1. Check disk usage
kubectl exec -it prometheus-0 -- df -h

# 2. Check data retention
kubectl get prometheus -o yaml | grep retention

# 3. Check cardinality explosion
# Visit: http://prometheus:9090/tsdb-status
# Look for: High number of series (>1M)

# 4. Identify high-cardinality metrics
curl http://prometheus:9090/api/v1/label/__name__/values | jq '.data[]' | \
  xargs -I {} curl -s "http://prometheus:9090/api/v1/query?query=count({})" | \
  jq '.data.result[0].value[1]' | sort -n

# 5. Check scrape targets
curl http://prometheus:9090/api/v1/targets | jq '.data.activeTargets | length'
```

**Common Root Causes**:
- UUID in metric labels → infinite cardinality
- Too many scrape targets
- Retention too long (default: 15 days)
- No volume size increase during scale

**Resolution Examples**:
- Drop high-cardinality metrics:
```yaml
metric_relabel_configs:
  - source_labels: [__name__]
    regex: 'high_cardinality_metric.*'
    action: drop
```
- Reduce retention: `--storage.tsdb.retention.time=7d`
- Increase PVC size
- Use VictoriaMetrics (better compression)

---

## 📋 APPENDIX E: Salary Negotiation for SRE Roles (2026)

[⬆️ Back to Top](#-quick-navigation)

### Market Data (United States, 2026)

**Entry-Level SRE** (0-2 years):
- Base: $95K - $130K
- Total Comp: $110K - $160K
- Top Markets: SF Bay ($140K), NYC ($125K), Seattle ($120K)

**Mid-Level SRE** (3-5 years):
- Base: $130K - $170K
- Total Comp: $170K - $250K
- Top Markets: SF Bay ($220K), NYC ($190K), Seattle ($185K)

**Senior SRE** (5-8 years):
- Base: $160K - $210K
- Total Comp: $240K - $400K+
- Top Markets: SF Bay ($350K), NYC ($300K), Seattle ($280K)

**Staff SRE / Principal** (8+ years):
- Base: $200K - $280K
- Total Comp: $400K - $700K+
- FAANG can exceed $1M at this level

### Compensation Components

**Total Comp = Base + Bonus + Equity + Benefits**

1. **Base Salary**: 50-60% of total comp
2. **Bonus**: 10-20% of base (tied to performance)
3. **Equity** (RSUs): 20-40% of total comp
   - Vesting: Typically 4 years (25% per year)
   - Refreshers: Annual grants to retain talent
4. **Sign-On Bonus**: $10K-$100K (negotiable, often used to offset equity loss from previous job)
5. **Benefits**: Health insurance, 401k match, learning budget

### Negotiation Strategy

**Before the Offer**:
1. **Delay salary discussion** until after showcasing skills
   - "I'd like to learn more about the role first"
   - "I'm flexible on compensation for the right opportunity"

2. **Anchor high** when pressed:
   - Research levels.fyi for company/level data
   - Add 15-20% buffer for negotiation room

**After the Offer**:

**Good**: "Thank you for the offer! I'm excited about the opportunity. Based on my research and the value I bring, I was expecting a total comp closer to $X. Can we discuss?"

**Bad**: "I accept!" (no negotiation)

**What to Negotiate** (in order of leverage):

1. **Sign-On Bonus** (easiest - one-time cost)
   - "Can we add a $30K sign-on bonus to cover my unvested equity?"

2. **Equity** (medium - long-term cost)
   - "Can we increase the RSU grant to $X?"
   - Get absolute number of shares (not just dollar value!)

3. **Base Salary** (harder - recurring cost)
   - Justify with: Certifications, portfolio projects, competing offers

4. **Level** (hardest but highest impact)
   - "Based on my experience, I believe L5 is more appropriate"
   - Level up = $50K-$100K TC difference

5. **Benefits** (negotiable):
   - Learning budget: $2K-$5K/year
   - Home office setup: $2K-$5K
   - Relocation assistance: $10K-$30K

**Never Negotiate**:
- Health insurance (standard)
- 401k match (standard)
- Vacation days (usually standardized by level)

### Scripts for Common Scenarios

**Scenario 1: Low Initial Offer**
> "Thank you for the offer of $150K base + $80K equity. I'm very excited about the role. However, based on my research using levels.fyi and conversations with peers at similar companies, the market rate for this role with my experience is $180K base + $120K equity ($300K total comp). Additionally, I bring [unique skill: Terraform expertise, CKA cert, FinOps experience]. Would you be able to come up to $300K total comp?"

**Scenario 2: Competing Offers**
> "I have another offer from [Company] at $250K total comp. I prefer your company because [culture, mission, tech stack], but the compensation gap is significant. Can you match $250K?"

**Scenario 3: Unvested Equity Loss**
> "I have $50K in unvested RSUs at my current company that I'd forfeit if I leave. Can we add a $50K sign-on bonus to offset this? I can provide documentation of my equity grant."

**Scenario 4: Level Discussion**
> "The offer is for L4, but based on my scope at my current role [leading team of 5, owning platform reliability, $10M+ revenue impact], I believe L5 is more appropriate. Can we discuss leveling?"

### Red Flags in Negotiation

🚩 "This is our final offer, take it or leave it" (on first offer)
🚩 "We can't share our comp bands"
🚩 "Equity doesn't matter, we're pre-IPO" (vesting schedule matters!)
🚩 "We'll review in 6 months" (get it in writing!)

### What Companies Evaluate

| Factor | Weight | How to Signal |
|--------|--------|--------------|
| Technical Depth | 40% | Portfolio projects, system design, coding |
| Production Experience | 25% | War stories, incident handling, postmortems |
| Communication | 15% | Explain complex topics simply |
| Team Collaboration | 10% | Behavioral questions (STAR method) |
| Culture Fit | 10% | Company research, asking good questions |

### Leverage Points

**High Leverage** (use these):
- Competing offers (BATNA)
- Unique skills (FinOps, security, Terraform)
- Urgency (other companies in final rounds)
- Portfolio projects (proves capability)

**Low Leverage** (avoid these):
- Personal expenses ("I need to pay rent")
- Salary history ("I currently make $X")
- Desperation ("I really need this job")

### After Negotiation

**Get it in Writing**:
- Offer letter with: Base, bonus target, equity (shares + strike price for options, or RSU schedule), start date, level

**Verify Equity**:
- # of shares (not just dollar value)
- Vesting schedule (4 years 25%/year standard)
- Refresh schedule (annual grants?)
- Liquidity (public vs private company)

**Timeline**:
- "I need a few days to review and discuss with my family. Can I get back to you by Friday?"
- Standard: 3-7 days to decide

---

## 📋 APPENDIX F: 90-Day Interview Preparation Timeline

[⬆️ Back to Top](#-quick-navigation)

### Month 1: Technical Foundation (Days 1-30)
**Focus**: Complete this 30-day SRE guide

**Week 1** (Days 1-7): Systems + Cloud
- ✅ Complete all technical drills
- ✅ Solve 14 LeetCode problems (7 days × 2/day)
- ✅ Set up AWS free tier account
- ✅ Document learnings in GitHub repo

**Week 2** (Days 8-14): K8s + IaC + CI/CD
- ✅ Complete all technical drills
- ✅ Solve 14 LeetCode problems
- ✅ Set up local K8s cluster (Kind)
- ✅ Create first Terraform module

**Week 3** (Days 15-21): Observability + Security
- ✅ Complete all technical drills
- ✅ Solve 14 LeetCode problems
- ✅ Deploy Prometheus + Grafana locally
- ✅ Implement OPA policy

**Week 4** (Days 22-30): Architecture + Interview Prep
- ✅ Complete all technical drills
- ✅ Solve 16 LeetCode problems (includes Day 30 hard problems)
- ✅ Practice 3 system design problems
- ✅ Write behavioral stories (STAR method)

**Checkpoint**:
- ✅ 60+ LeetCode problems solved
- ✅ All 4 weeks completed
- ✅ GitHub repo with daily logs

### Month 2: Portfolio Building + Certification (Days 31-60)

**Week 5** (Days 31-37): Project #1 - FinOps Dashboard
- Build frontend (React)
- Build backend (FastAPI)
- Integrate Kubecost API
- Deploy to GitHub Pages
- Write comprehensive README

**Week 6** (Days 38-44): Project #2 - CI/CD Pipeline
- Create GitHub Actions workflow
- Implement security scanning
- Set up ArgoCD
- Document DORA metrics
- Create reusable template

**Week 7** (Days 45-51): AWS Certification Prep
- Complete AWS Solutions Architect Associate course
- Take 3 practice exams (score >80%)
- Schedule exam for end of week 8

**Week 8** (Days 52-60): AWS Cert + Project #3 Start
- Take AWS SA-A exam (schedule for Day 56)
- Start Incident Management Platform (backend only)

**Checkpoint**:
- ✅ 2 portfolio projects live
- ✅ AWS SA-A certified
- ✅ Project #3 50% complete

### Month 3: Advanced Projects + Job Applications (Days 61-90)

**Week 9** (Days 61-67): Complete Projects #3 & #4
- Finish Incident Management Platform
- Build Chaos Engineering Platform (MVP)
- Deploy both projects
- Polish READMEs with metrics

**Week 10** (Days 68-74): Capstone Project #5
- Set up AWS infrastructure with Terraform
- Deploy all 4 projects to EKS
- Create portfolio site
- Measure SLOs and cost

**Week 11** (Days 75-81): CKA Certification
- Complete CKA course (Kodekloud)
- Take killer.sh practice exam (score >70%)
- Schedule CKA exam for Day 80
- Take CKA exam

**Week 12** (Days 82-90): Job Applications
- Update resume with projects + certs
- Update LinkedIn profile
- Apply to 50+ SRE roles
- Start getting interviews!

**Checkpoint**:
- ✅ All 5 portfolio projects live
- ✅ 2 certifications (AWS SA-A, CKA)
- ✅ Resume + LinkedIn optimized
- ✅ 50+ applications submitted

### Daily Routine During Job Search (Days 91+)

**Morning** (1 hour):
- Review 1 system design problem
- Practice 1 LeetCode problem
- Read 1 postmortem (https://github.com/danluu/post-mortems)

**Afternoon** (2 hours):
- Apply to 5-10 companies
- Customize resume per job description
- Write personalized cover letter (if required)

**Evening** (1 hour):
- Research companies (culture, tech stack, recent news)
- Prepare questions for interviews
- Practice behavioral answers (STAR method)

### Interview Stages Timeline

**Phone Screen** (Week 1-2 after applying):
- 30-45 min with recruiter
- High-level fit discussion
- Salary expectations (defer!)

**Technical Phone Screen** (Week 2-3):
- 1 hour with engineer
- LeetCode medium problem
- System design light discussion

**Onsite / Virtual Onsite** (Week 3-5):
- 4-6 hours total
- Coding: 1-2 rounds (LeetCode medium/hard)
- System Design: 1-2 rounds (design Twitter, URL shortener)
- Behavioral: 1 round (STAR method)
- Hiring Manager: 1 round (team fit, projects)

**Offer** (Week 5-6):
- Review offer letter
- Negotiate (3-7 days to decide)
- Accept!

### Total Timeline: Start to Offer

| Milestone | Timeline | Investment |
|-----------|----------|------------|
| Complete 30-day guide | Day 1-30 | 60 hours |
| Build 2 projects | Day 31-50 | 40 hours |
| AWS SA-A cert | Day 45-56 | 50 hours |
| Complete all 5 projects | Day 51-74 | 50 hours |
| CKA cert | Day 68-80 | 50 hours |
| Job search | Day 75-90+ | 60 hours |
| **Total to first offer** | **~120 days** | **310 hours** |

**Expected Outcome**:
- 2-3 certifications
- 5 production-grade portfolio projects
- 80+ LeetCode problems solved
- 5-10 interview opportunities
- 1-3 offers
- $150K-$250K total compensation

---

## 📋 APPENDIX G: Real Company Interview Processes

[⬆️ Back to Top](#-quick-navigation)

### Google SRE

**Process**:
1. **Phone Screen** (45 min)
   - Data structures & algorithms (LeetCode medium)
   - System design (light)

2. **Onsite** (5 rounds × 45 min):
   - **Coding** (2 rounds): LeetCode medium-hard, focus on algorithms
   - **System Design** (2 rounds): Design distributed system (e.g., design rate limiter)
   - **Troubleshooting** (1 round): Debug production scenario (logs, metrics, traces)

3. **Hiring Committee**:
   - Reviews feedback from interviewers
   - Makes hire/no-hire decision
   - Determines level (L3-L6)

**Preparation Focus**:
- ✅ **Algorithms**: Heavy focus, expect hard problems
- ✅ **System Design**: Distributed systems, consistency, scale
- ✅ **Troubleshooting**: Read "Site Reliability Engineering" book

**Sample Questions**:
- "Design a global load balancer"
- "Debug high latency in a distributed system"
- "Implement LRU cache with O(1) operations"

**Timeline**: 6-8 weeks
**Levels**: L3 (entry), L4 (mid), L5 (senior), L6 (staff)
**Compensation** (L4): $200K-$280K

---

### Meta (Facebook) Production Engineer

**Process**:
1. **Recruiter Screen** (30 min)
2. **Technical Phone Screen** (45 min)
   - Coding (LeetCode medium)
   - Linux/systems questions

3. **Onsite** (4-5 rounds):
   - **Coding** (2 rounds): LeetCode medium, sometimes hard
   - **System Design** (1-2 rounds): Large-scale distributed system
   - **Behavioral** (1 round): Culture fit, impact stories

**Preparation Focus**:
- ✅ **Coding**: Focus on graphs, trees, and string manipulation
- ✅ **System Design**: FB scale (billions of users)
- ✅ **Behavioral**: Impact-driven stories ("I led X, resulting in Y")

**Sample Questions**:
- "Design Instagram feed"
- "Debug slow page load times"
- "Implement rate limiter"

**Timeline**: 4-6 weeks
**Levels**: E3 (entry), E4 (mid), E5 (senior), E6 (staff)
**Compensation** (E4): $220K-$300K

---

### Amazon SDE/SRE

**Process**:
1. **OA (Online Assessment)**: 2 LeetCode problems (90 min)
2. **Phone Screen** (1 hour): Coding + behavioral
3. **Onsite** (5 rounds × 1 hour):
   - **Coding** (2-3 rounds): LeetCode medium
   - **System Design** (1 round): AWS-centric design
   - **Behavioral** (2 rounds): Leadership Principles (LP)

**Preparation Focus**:
- ✅ **Leadership Principles**: Memorize all 16, prepare stories for each
- ✅ **Coding**: Focus on arrays, strings, trees
- ✅ **System Design**: AWS services (S3, DynamoDB, Lambda)

**Amazon Leadership Principles** (Top 5 for SRE):
1. **Customer Obsession**: "Tell me about a time you prioritized users"
2. **Ownership**: "Tell me about a time you went above and beyond"
3. **Bias for Action**: "Tell me about a time you made a decision with limited data"
4. **Dive Deep**: "Tell me about a time you debugged a complex issue"
5. **Deliver Results**: "Tell me about a time you delivered despite obstacles"

**Timeline**: 4-8 weeks
**Levels**: SDE2 (mid), SDE3 (senior), Principal
**Compensation** (SDE2): $180K-$250K

---

### Netflix SRE

**Process**:
1. **Recruiter Screen** (30 min)
2. **Hiring Manager Screen** (1 hour): Technical discussion + culture fit
3. **Onsite** (4-6 hours):
   - **System Design** (2 hours): Netflix-scale problem (billions of streams)
   - **Technical Deep Dive** (1 hour): Past project discussion
   - **Coding** (1 hour): Scripting (Python/Bash), not LeetCode
   - **Behavioral** (1 hour): Culture fit (radical transparency)

**Preparation Focus**:
- ✅ **System Design**: Focus on scale, chaos engineering, microservices
- ✅ **Deep Technical Knowledge**: AWS, K8s, observability
- ✅ **Culture**: Read Netflix culture deck

**Sample Questions**:
- "Design video encoding pipeline for 1B users"
- "How would you migrate from AWS to GCP with zero downtime?"
- "Explain a complex production incident you led"

**Timeline**: 3-5 weeks
**Levels**: Senior SRE (no junior roles)
**Compensation**: $300K-$500K

---

### Stripe Infrastructure Engineer

**Process**:
1. **Phone Screen** (45 min): Coding (LeetCode medium)
2. **Onsite** (4 rounds):
   - **Coding** (2 rounds): Payments-related algorithms
   - **System Design** (1 round): Design payment system
   - **Integration** (1 round): Debug API integration

**Preparation Focus**:
- ✅ **Payments Knowledge**: Idempotency, transactions, retries
- ✅ **API Design**: RESTful APIs, webhooks, rate limiting
- ✅ **Reliability**: SLOs, error handling, retries

**Sample Questions**:
- "Design a payment processing system"
- "How would you handle duplicate payment requests?"
- "Debug slow API response times"

**Timeline**: 4-6 weeks
**Compensation** (L3): $220K-$320K

---

### Startup (Series A-C) SRE

**Process**:
1. **Intro Call** (30 min): Culture fit, high-level technical chat
2. **Technical Interview** (1-2 hours):
   - System design (startup scale: 10K-1M users)
   - Hands-on debugging (real scenario)
   - Coding (if required, usually LeetCode easy-medium)

3. **Team Fit** (1 hour): Meet the team, discuss projects

**Preparation Focus**:
- ✅ **Generalist Skills**: Wear many hats (dev + ops + security)
- ✅ **Cost Consciousness**: FinOps, optimizations
- ✅ **Scrappiness**: Build fast with limited resources

**Sample Questions**:
- "We have $5K/month AWS bill. How would you optimize?"
- "Set up our first monitoring system"
- "Our app is slow. How would you investigate?"

**Timeline**: 2-4 weeks (much faster!)
**Compensation**: $120K-$200K (lower than FAANG, but equity upside)

---

## 📋 APPENDIX H: Hands-On Labs & Practice Environments

[⬆️ Back to Top](#-quick-navigation)

### Free Interactive Labs (No Setup Required)

**1. Linux & Systems**
- **Killercoda** (Interactive K8s + Linux labs): https://killercoda.com/
  - Free, browser-based, no signup
  - Labs: strace, tcpdump, systemd, eBPF
  - Estimated time: 2-3 hours per lab

- **OverTheWire Bandit** (Linux command line): https://overthewire.org/wargames/bandit/
  - SSH-based wargame
  - Levels 0-34 (progressively harder)
  - Teaches: grep, find, ssh, permissions

**2. Kubernetes**
- **Play with Kubernetes**: https://labs.play-with-k8s.com/
  - Free 4-hour sessions
  - Full K8s cluster in browser
  - Perfect for quick experiments

- **Kubernetes The Hard Way** (Interactive): https://killercoda.com/kubernetes-the-hard-way
  - Deploy K8s from scratch
  - Understand every component
  - Time: 4-6 hours

**3. AWS**
- **AWS Skill Builder** (Free tier): https://aws.amazon.com/training/digital/
  - 100+ free courses
  - Hands-on labs (sandbox environment)
  - Focus: VPC, EC2, RDS, CloudWatch

- **AWS Well-Architected Labs**: https://www.wellarchitectedlabs.com/
  - Real-world scenarios
  - Cost optimization, reliability, security
  - Time: 1-3 hours per lab

**4. Terraform**
- **HashiCorp Learn**: https://developer.hashicorp.com/terraform/tutorials
  - Interactive tutorials
  - Free sandbox (no AWS account needed)
  - Covers: Basics to advanced state management

**5. Chaos Engineering**
- **Gremlin Free Tier**: https://www.gremlin.com/community/
  - Free for personal use
  - Pre-built chaos experiments
  - Visual failure injection

**6. Observability**
- **Grafana Playground**: https://play.grafana.org/
  - Pre-configured dashboards
  - Explore PromQL queries
  - No signup required

- **Prometheus Demo**: https://demo.promlabs.com/
  - Live Prometheus instance
  - Practice PromQL
  - Real metrics data

### Practice Problem Sets

**System Design**:
1. **ByteByteGo** (Paid but worth it): https://bytebytego.com/
   - 30+ system design problems with solutions
   - Video explanations
   - Cost: $39/year

2. **System Design Primer**: https://github.com/donnemartin/system-design-primer
   - Free, comprehensive guide
   - Flashcards, exercises
   - Solutions with diagrams

**Coding (LeetCode)**:
- **Grind 75**: https://www.techinterviewhandbook.org/grind75
  - Curated 75 problems for interviews
  - Sorted by importance
  - Track progress

- **Blind 75**: https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
  - 75 must-do problems
  - Covers all patterns

**SRE-Specific**:
- **SRE Interview Prep**: https://github.com/mxssl/sre-interview-prep-guide
  - 100+ SRE questions
  - System design scenarios
  - Troubleshooting exercises

### Local Lab Setup (Weekend Project)

**Objective**: Build a local SRE platform in 4 hours

```bash
# 1. Install tools (30 min)
brew install kind kubectl helm terraform

# 2. Create K8s cluster (10 min)
kind create cluster --name sre-lab --config - <<EOF
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
EOF

# 3. Install Prometheus + Grafana (30 min)
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack

# 4. Deploy sample app (20 min)
kubectl create deployment demo --image=nginx --replicas=3
kubectl expose deployment demo --port=80 --type=NodePort

# 5. Generate load (10 min)
kubectl run load-generator --image=busybox --restart=Never -- /bin/sh -c "while true; do wget -q -O- http://demo; done"

# 6. Explore metrics (30 min)
kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090
# Visit: http://localhost:9090
# Try queries:
#   rate(container_cpu_usage_seconds_total[5m])
#   container_memory_working_set_bytes

# 7. Create Grafana dashboard (30 min)
kubectl port-forward svc/prometheus-grafana 3000:80
# Visit: http://localhost:3000 (admin / prom-operator)
# Import dashboard: 315 (Kubernetes cluster monitoring)

# 8. Simulate failure (20 min)
kubectl delete pod -l app=demo --random
# Watch metrics recover

# 9. Add alerting (30 min)
# Create PrometheusRule for high CPU
# Test: stress --cpu 4 (in pod)

# 10. Document (30 min)
# Screenshot dashboards
# Save PromQL queries
# Write README
```

**What You'll Learn**:
- K8s cluster setup
- Monitoring stack deployment
- Metrics collection and querying
- Alerting configuration
- Incident simulation

---

## 📋 APPENDIX I: Resume & LinkedIn Optimization

[⬆️ Back to Top](#-quick-navigation)

### Resume Template for SRE Roles

**Header**:
```
JOHN DOE
Site Reliability Engineer | Kubernetes • Terraform • AWS
San Francisco, CA | john.doe@email.com | linkedin.com/in/johndoe | github.com/johndoe
```

**Summary** (3-4 lines):
```
Site Reliability Engineer with 3 years of experience building and scaling cloud-native infrastructure.
Specialized in Kubernetes, Terraform, and AWS with a track record of reducing costs by 40% ($200K/year)
and improving deployment frequency by 10x. AWS Certified Solutions Architect and CKA certified.
```

**Technical Skills** (Keyword-optimized for ATS):
```
Cloud Platforms: AWS (VPC, EC2, EKS, RDS, Lambda, CloudWatch, S3), GCP
Containers & Orchestration: Kubernetes (EKS, ECS, Fargate), Docker, Helm, ArgoCD
Infrastructure as Code: Terraform, CloudFormation, AWS CDK
CI/CD: GitHub Actions, GitLab CI, Jenkins, ArgoCD (GitOps)
Observability: Prometheus, Grafana, Loki, Tempo, Jaeger, CloudWatch, Datadog
Languages: Python, Go, Bash, SQL
Security: OPA/Gatekeeper, Falco, Trivy, IAM, Secrets Manager, Vault
Databases: PostgreSQL, MySQL, DynamoDB, Redis
```

**Experience** (Use STAR format + metrics):

**Senior Site Reliability Engineer | TechCorp Inc. | Jan 2023 - Present**
- ✅ **Reduced AWS costs by 40% ($200K/year)** by implementing FinOps practices: rightsizing EC2 instances (analyzing CloudWatch metrics), migrating to Graviton instances, implementing storage lifecycle policies, and purchasing 1-year RIs for predictable workloads
- ✅ **Improved deployment frequency from 2/week to 20/day** by building production-grade CI/CD pipeline with GitHub Actions, implementing security scanning (Trivy, Snyk, gitleaks), and deploying GitOps with ArgoCD
- ✅ **Reduced MTTR from 2 hours to 15 minutes** by implementing SLO-based alerting (burn rate alerts), building runbooks for top 10 incidents, and creating incident management platform with PagerDuty integration
- ✅ **Migrated 50+ microservices to Kubernetes (EKS)** with zero downtime using blue-green deployment strategy, achieving 99.95% uptime SLA
- ✅ **Built observability platform** (Prometheus, Grafana, Loki, Tempo) serving 10M metrics/sec, reducing investigation time by 60%

**Site Reliability Engineer | StartupXYZ | Jun 2021 - Dec 2022**
- ✅ **Scaled infrastructure from 10K to 1M users** by implementing HPA (Horizontal Pod Autoscaler), optimizing database queries (reducing p95 latency from 500ms to 80ms), and adding read replicas
- ✅ **Implemented disaster recovery strategy** achieving RPO < 15 minutes and RTO < 30 minutes using RDS automated backups, cross-region replication, and automated failover testing (chaos engineering)
- ✅ **Reduced security vulnerabilities by 90%** by implementing container scanning (Trivy), OPA admission policies (blocking privileged pods), and External Secrets Operator (removing secrets from Git)

**Education**:
```
Bachelor of Science in Computer Science | University of California, Berkeley | 2021
```

**Certifications**:
```
- AWS Certified Solutions Architect – Associate (2024)
- Certified Kubernetes Administrator (CKA) (2024)
- HashiCorp Certified: Terraform Associate (2023)
```

**Portfolio Projects** (link to GitHub):
```
- K8s FinOps Dashboard: Real-time cost analysis with savings recommendations | React + FastAPI
- Production CI/CD Template: Complete pipeline with security scanning and GitOps | GitHub Actions
- Incident Management Platform: PagerDuty integration with executive summaries | Next.js
- SRE Platform Toolkit: Full IaC deployment with monitoring and cost tracking | Terraform + EKS
```

### Resume Tips

**DO**:
- ✅ **Quantify everything**: "$200K saved", "10x faster", "99.95% uptime"
- ✅ **Use action verbs**: Built, Reduced, Improved, Implemented, Scaled
- ✅ **Keywords for ATS**: List all relevant tools (Terraform, Kubernetes, AWS, etc.)
- ✅ **Link portfolio**: GitHub profile, live demos
- ✅ **Tailor per job**: Match job description keywords

**DON'T**:
- ❌ **Generic statements**: "Responsible for managing servers"
- ❌ **No metrics**: "Improved performance" (by how much?)
- ❌ **Typos**: Use Grammarly
- ❌ **Walls of text**: Use bullet points
- ❌ **Unrelated experience**: Focus on relevant roles

### LinkedIn Profile Optimization

**Headline** (220 characters):
```
Senior Site Reliability Engineer | Kubernetes • Terraform • AWS | Reducing Costs by 40% & Improving Deployment Frequency by 10x | CKA & AWS Certified | Open to Opportunities
```

**About Section** (2000 characters):
```
I'm a Site Reliability Engineer passionate about building scalable, cost-efficient, and secure cloud infrastructure.

🎯 What I Do:
- Build and scale Kubernetes platforms (EKS) serving millions of users
- Reduce cloud costs through FinOps practices (40% savings = $200K/year)
- Implement CI/CD pipelines with security scanning (GitOps + ArgoCD)
- Design observability platforms (Prometheus, Grafana, distributed tracing)
- Lead incident response and write blameless postmortems

💼 Key Achievements:
- Reduced AWS costs by 40% ($200K/year) through rightsizing and FinOps
- Improved deployment frequency from 2/week to 20/day (10x improvement)
- Reduced MTTR from 2 hours to 15 minutes with SLO-based alerting
- Migrated 50+ microservices to Kubernetes with 99.95% uptime

🛠️ Tech Stack:
Cloud: AWS (VPC, EC2, EKS, RDS, Lambda, CloudWatch)
Containers: Kubernetes, Docker, Helm, ArgoCD
IaC: Terraform, CloudFormation
CI/CD: GitHub Actions, GitLab CI, ArgoCD
Observability: Prometheus, Grafana, Loki, Tempo
Security: OPA, Falco, Trivy, Vault
Languages: Python, Go, Bash

📜 Certifications:
- AWS Solutions Architect Associate
- Certified Kubernetes Administrator (CKA)
- HashiCorp Terraform Associate

🚀 Portfolio:
Check out my projects: github.com/johndoe
- K8s FinOps Dashboard
- Production CI/CD Template
- Incident Management Platform
- Full SRE Platform Toolkit

📫 Let's Connect:
Always happy to chat about SRE, cloud architecture, or FinOps. Open to new opportunities!
```

**Experience Section**:
- Copy from resume (same bullet points)
- Add media: Screenshots of dashboards, architecture diagrams
- Add skills: LinkedIn will suggest skills, add all relevant ones

**Featured Section**:
- Link to GitHub projects
- Articles/posts you've written
- Presentations or talks

**Recommendations**:
- Ask 2-3 colleagues for recommendations
- Specific > generic ("John reduced our AWS costs by 40%")

### LinkedIn Content Strategy

**Post Weekly** (builds thought leadership):

**Week 1**: Project showcase
```
🚀 Just launched my K8s FinOps Dashboard!

Analyzes cost per namespace/pod and provides savings recommendations.

Tech stack: React + FastAPI + Kubecost

Key features:
- Real-time cost allocation
- Idle resource detection
- Rightsizing recommendations
- Estimated $50K+/year savings potential

Check it out: [link]

What FinOps practices do you use in your org?

#SRE #Kubernetes #FinOps #CloudCost
```

**Week 2**: Technical deep-dive
```
💡 How We Reduced AWS Costs by 40% ($200K/year)

Our FinOps strategy:
1. Rightsizing: CloudWatch metrics → downsize underutilized instances (-30%)
2. Reserved Instances: 1-year RIs for predictable workloads (-25%)
3. Storage Lifecycle: S3 → Glacier after 90 days (-20%)
4. Graviton Migration: ARM instances for 20% cost savings
5. Zombie Resource Cleanup: Unattached EBS volumes, old snapshots (-15%)

Total: 40% reduction = $200K/year saved

What's your biggest cloud cost challenge?

#AWS #FinOps #CloudCost #SRE
```

**Week 3**: Lessons learned
```
🔥 My Worst Production Incident (and What I Learned)

3 AM page: Database replication lag = 10 minutes

Our payments were delayed. Users angry. Leadership panicking.

What I did:
1. ✅ Triage first (stop writes to replica)
2. ✅ Communicated every 15 min (exec + eng teams)
3. ✅ Root cause: Long-running query blocking replication
4. ✅ Fixed: Killed query, optimized with index
5. ✅ Prevented: Added query timeout, read replica alerting

MTTR: 22 minutes
Impact: 100 delayed payments (no data loss)

Lesson: Triage > Root cause. Mitigate first, investigate later.

What's your worst incident story?

#SRE #IncidentManagement #Postmortem
```

**Week 4**: Career advice
```
📚 How I Became an SRE in 90 Days (Complete Roadmap)

I had web dev experience but wanted to break into SRE.

Here's what I did:
- Month 1: Learned Linux, K8s, Terraform (30-day guide)
- Month 2: Built 5 portfolio projects (GitHub showcase)
- Month 3: Got AWS + CKA certs
- Result: 3 offers ($180K-$250K range)

Key lesson: Portfolio > Resume

Show, don't tell. Build real projects that solve real problems.

Full roadmap in comments 👇

#SRE #CareerAdvice #DevOps
```

**Engagement Tips**:
- Post between 8-10 AM Tuesday-Thursday (highest engagement)
- Use 3-5 hashtags
- Add image/video (3x more engagement)
- Respond to every comment in first hour
- Engage with others' posts daily (build network)

---

## 🎯 Final Checklist: Are You Ready?

### Technical Skills ✅
- [ ] Can debug a production issue using strace, eBPF, and logs
- [ ] Can design a system for 10M users with load balancing, caching, database
- [ ] Can write Terraform to provision VPC, EC2, RDS, and deploy to production
- [ ] Can build a CI/CD pipeline with security scanning and GitOps
- [ ] Can implement Kubernetes security (RBAC, OPA, secrets management)
- [ ] Can set up observability (Prometheus, Grafana, distributed tracing)
- [ ] Can calculate error budgets and design SLO-based alerts
- [ ] Can optimize AWS costs by 30%+ with FinOps practices
- [ ] Can solve 60+ LeetCode problems (easy + medium)
- [ ] Can explain CAP theorem, consistent hashing, and distributed transactions

### Soft Skills ✅
- [ ] Can lead incident response as Incident Commander
- [ ] Can write executive summaries translating technical → business impact
- [ ] Can answer 7+ behavioral questions using STAR method
- [ ] Can explain complex technical concepts to non-technical stakeholders
- [ ] Can write blameless postmortems with 5 whys analysis
- [ ] Can collaborate with dev teams on performance optimization
- [ ] Can mentor junior engineers on best practices

### Portfolio ✅
- [ ] 5 production-grade projects on GitHub with comprehensive READMEs
- [ ] Live demos deployed to AWS/GitHub Pages
- [ ] Architecture diagrams for each project
- [ ] Metrics documented (cost savings, performance improvements, uptime)
- [ ] Portfolio site showcasing all projects

### Certifications ✅
- [ ] AWS Solutions Architect Associate (or equivalent cloud cert)
- [ ] Certified Kubernetes Administrator (CKA)
- [ ] (Optional) Terraform Associate, AWS DevOps Pro, CKS

### Career Materials ✅
- [ ] Resume with quantified achievements (updated within 7 days)
- [ ] LinkedIn profile optimized (headline, about, experience, featured)
- [ ] GitHub profile with pinned repositories
- [ ] 3 technical stories + 3 behavioral stories prepared (STAR format)
- [ ] List of 50+ target companies with SRE roles

### Interview Prep ✅
- [ ] Completed 10+ system design problems (with solutions)
- [ ] Practiced 60+ LeetCode problems (can solve medium in <30 min)
- [ ] Read 20+ postmortems from top companies
- [ ] Reviewed this guide's interview question bank (Appendix A)
- [ ] Can explain all projects in <5 minutes each
- [ ] Can answer "Tell me about yourself" in <2 minutes

---

## 🚀 You're Ready! Now Go Get That Offer!

If you've completed this guide and checked off the items above, you are **interview-ready** for SRE roles at:
- ✅ FAANG (Google, Meta, Amazon, Apple, Netflix)
- ✅ Unicorn startups (Stripe, Airbnb, Uber, DoorDash, Databricks)
- ✅ FinTech (Robinhood, Coinbase, Plaid, Affirm)
- ✅ Series A-C startups

**Expected outcome**:
- 5-10 interview opportunities
- 1-3 offers within 90 days
- $150K-$300K total compensation (depending on level and location)

**Next steps**:
1. Apply to 50+ companies (don't filter yourself out!)
2. Customize resume for each application (match keywords)
3. Network on LinkedIn (connect with SRE hiring managers)
4. Practice coding daily (maintain skills)
5. Keep building (new projects show continuous learning)

**Remember**:
- Rejection is normal (even 90% rejection rate is fine)
- Every interview is practice (you improve each time)
- Persistence pays off (it only takes one YES)
- Your portfolio proves your capability
- You've put in the work - now reap the rewards!

---

**Share Your Success!** 🎉

When you land your SRE role, share your journey:
- LinkedIn post: "How I became an SRE"
- GitHub: Update this guide with your learnings
- Reddit: r/devops, r/sre
- Twitter: #SRE #DevOps #CloudEngineering

Let's build a community of SREs helping the next generation!

Good luck! 🚀

---

## 📋 APPENDIX J: AI Prompts for All 30 Days

[⬆️ Back to Top](#-quick-navigation)

### How to Use This Appendix

Copy-paste these prompts into **Claude**, **ChatGPT**, **Gemini**, or **Grok** for personalized learning assistance.

**Recommended AI by Week**:
- **Week 1** (Systems): Claude (best for deep technical explanations)
- **Week 2** (K8s/IaC): ChatGPT (best for code generation)
- **Week 3** (Observability): Gemini (best for finding docs)
- **Week 4** (Architecture): Claude (best for system design)

---

### 🤖 Week 1 Prompts: Systems & Cloud

**Day 1: Process Lifecycle & System Calls**
```
I'm learning Linux process management for SRE interviews.

Cover:
- fork(), clone(), execve(), wait4() system calls
- strace for debugging (when to use, overhead considerations)
- /proc filesystem inspection
- Zombie vs orphan processes
- Debug scenario: 100% CPU Java process

Provide:
1. Conceptual overview (ELI5 + production examples)
2. 10 hands-on commands with expected outputs
3. Debug walkthrough: Java process at 100% CPU
4. 5 FAANG interview questions with answers
5. 3 practice exercises

Context: Targeting Google/Meta SRE. Make it production-focused.
```

**Day 2: I/O & VFS Layer**
```
Day 2 of SRE prep: Advanced I/O & Virtual File System

Topics:
- Page cache, dirty pages, fsync() impact on performance
- Inode exhaustion debugging
- iostat, lsof for I/O analysis
- Buffered vs unbuffered I/O
- High iowait troubleshooting

Provide:
1. I/O subsystem architecture diagram (describe in text)
2. Commands to debug high iowait (with interpretation)
3. Scenario: inode exhaustion but disk space available - debug steps
4. Performance tuning: fsync() vs database throughput trade-offs
5. Interview question: "Our app is slow. iostat shows high %util. What do you check?"

Make examples PostgreSQL/MySQL focused (common in SRE interviews).
```

**Day 3: TCP & Cloud Networking**
```
Day 3: TCP internals + AWS VPC networking

Part 1 - TCP:
- 3-way handshake, 4-way termination
- Congestion control (CUBIC vs BBR)
- BDP (Bandwidth-Delay Product)
- Using tc for traffic control
- Debugging with ss command

Part 2 - AWS VPC:
- VPC CIDR planning
- Public/private subnets
- Internet Gateway vs NAT Gateway
- Security Groups vs NACLs (stateful vs stateless)
- Common misconfigurations

Provide:
1. TCP state diagram (describe transitions)
2. ss commands to monitor TCP performance
3. VPC architecture for 3-tier web app (diagram description)
4. Debug scenario: EC2 can't reach internet - troubleshooting checklist
5. Interview question: "Explain how a packet travels from user's browser to your private EC2 instance"

Context: AWS-focused SRE role.
```

**Day 4: HTTP/3 & QUIC**
```
Day 4: HTTP/3 & QUIC protocol

Cover:
- TCP Head-of-Line blocking problem
- QUIC as transport protocol (vs TCP)
- Connection migration (Wi-Fi to 5G seamless)
- 0-RTT connection establishment
- When to use HTTP/3 vs HTTP/2

Provide:
1. Protocol comparison table: HTTP/1.1 vs HTTP/2 vs HTTP/3
2. curl --http3 examples (how to test)
3. Wireshark / tshark commands to identify QUIC packets
4. Use case: Mobile gaming chat - why HTTP/3 helps
5. Interview scenario: "User reports intermittent connection drops. How do you investigate if HTTP/3 helps?"

Make it practical for CDN/edge computing discussions.
```

**Day 5: Memory Management & Cloud IAM**
```
Day 5: Memory + AWS IAM

Part 1 - Memory:
- OOM killer behavior and oom_score
- Anonymous vs file-backed memory
- Swappiness tuning
- Memory leak detection

Part 2 - AWS IAM:
- IAM roles vs users vs policies
- Instance profiles for EC2
- STS AssumeRole
- Least-privilege principle
- EC2 instance types (compute vs memory optimized)

Provide:
1. Commands to debug OOM: journalctl, /proc/pid/oom_score
2. IAM policy examples: S3 read-only, EC2 describe
3. Scenario: Production EC2 OOMing - is it leak or undersized?
4. Rightsizing strategy using CloudWatch metrics
5. Interview question: "Walk me through how OOM killer decides which process to kill"

Context: AWS SRE role with cost optimization focus.
```

**Day 6: eBPF & Kernel Observability**
```
Day 6: eBPF for production observability

Topics:
- eBPF safety guarantees (vs kernel modules)
- bpftrace for tracing syscalls
- CO-RE (Compile Once, Run Everywhere)
- BTF (BPF Type Format)
- When eBPF > traditional tools (strace, perf)

Provide:
1. bpftrace one-liners: trace slow syscalls, network latency, file I/O
2. Comparison: strace vs perf vs eBPF (overhead, use cases)
3. Production scenario: Kernel scheduler throttling - how eBPF proves it
4. 5 eBPF use cases APM tools can't catch
5. Interview question: "How would you trace all TCP connections without affecting performance?"

Make it Brendan Gregg style (performance analysis focus).
```

**Day 7: Distributed Tracing & Cloud Observability**
```
Day 7: OpenTelemetry + AWS observability

Part 1 - Distributed Tracing:
- OpenTelemetry instrumentation
- W3C Trace Context propagation
- Span analysis in Jaeger
- Sampling strategies (head vs tail)

Part 2 - AWS Observability:
- CloudWatch custom metrics, alarms, dashboards
- AWS X-Ray for distributed tracing
- CloudWatch vs Prometheus trade-offs

Provide:
1. OTel instrumentation code example (Python/Go)
2. How to find "missing 200ms" in 3-service call chain
3. CloudWatch alarm for p95 latency >500ms
4. Scenario: Cross-region latency - Lambda cold start vs network vs code
5. Interview question: "Design observability for microservices with 50+ services"

Context: Migrating from monolith to microservices.
```

---

### 🤖 Week 2 Prompts: Kubernetes, IaC & CI/CD

**Day 8-14 Prompts**: *(Continue pattern for all 30 days)*

---

### 🤖 Quick Prompt Templates (Use These for Any Day)

**General Learning Template**:
```
I'm on Day X of SRE preparation, focusing on [TOPIC].

Learning goals:
- [Goal 1]
- [Goal 2]
- [Goal 3]

Please provide:
1. Conceptual overview (10 min read)
2. Hands-on commands/code (20 min practice)
3. Real-world debugging scenario (15 min)
4. Interview questions + answers (3-5 questions)
5. Practice exercises (3 challenges)

Context: Targeting [COMPANY] SRE role. [EXPERIENCE LEVEL].
```

**Interview Prep Template**:
```
I just learned [TOPIC] and need to prepare for interviews.

Generate:
1. Top 10 interview questions about [TOPIC]
2. STAR method answer for: "Tell me about a time you [SCENARIO]"
3. System design question incorporating [TOPIC]
4. Common pitfalls interviewees make
5. Follow-up questions interviewers might ask

Difficulty: [Google/Meta/Amazon] level
```

**Debug Scenario Template**:
```
Create a production debugging scenario for [TOPIC]:

Setup:
- System: [e.g., K8s cluster with 100 microservices]
- Symptom: [e.g., p95 latency spike from 100ms to 2s]
- Impact: [e.g., 10% error rate, angry customers]

Guide me through:
1. Initial triage (what to check first)
2. Debugging commands/tools to use
3. Multiple possible root causes
4. How to confirm actual root cause
5. Mitigation steps
6. Permanent fix
7. How to prevent recurrence

Make it realistic and time-pressured (on-call scenario).
```

**Code Review Template**:
```
I wrote [CODE/CONFIG] for [PURPOSE].

Please review for:
1. Security vulnerabilities (OWASP top 10)
2. Performance issues
3. Reliability concerns (SRE perspective)
4. Cost optimization opportunities
5. Best practices violations

Then provide:
- Improved version with explanations
- Production readiness checklist
- Edge cases I missed

Code:
[PASTE YOUR CODE]
```

**Comparison Template**:
```
Compare [OPTION A] vs [OPTION B] for [USE CASE]:

Analyze:
1. Pros and cons of each
2. Performance characteristics
3. Cost implications
4. Operational complexity
5. When to choose A vs B

Then create:
- Decision matrix table
- Real-world examples of each
- Migration path if switching between them

Context: [COMPANY SIZE], [SCALE], [CONSTRAINTS]
```

---

### 🎯 AI Assistant Recommendations by Learning Style

**Visual Learner** 👁️
- Use **Gemini** (can search images/diagrams)
- Ask: "Show me architecture diagrams for [TOPIC]"
- Ask: "Create ASCII art diagram of [SYSTEM]"

**Hands-On Learner** 🛠️
- Use **ChatGPT** (best code generation)
- Ask: "Give me 10 exercises to practice [SKILL]"
- Ask: "Create a lab setup for [TOPIC]"

**Conceptual Learner** 🧠
- Use **Claude** (best explanations)
- Ask: "Explain [TOPIC] with analogies"
- Ask: "What mental models help understand [CONCEPT]?"

**Interview-Focused Learner** 🎯
- Use **Claude** for system design
- Use **ChatGPT** for coding problems
- Ask: "Generate interview questions for [TOPIC]"
- Ask: "What would [COMPANY] ask about this?"

---

### 💡 Pro Tips for AI-Assisted Learning

**1. Iterate Your Prompts**
```
First prompt: "Explain Kubernetes networking"
Better prompt: "Explain Kubernetes CNI networking for production SRE, focusing on troubleshooting pod-to-pod connectivity issues across nodes. Include real debugging commands."
```

**2. Ask for Analogies**
```
"Explain eBPF using a factory analogy"
"Compare Terraform state to [everyday concept]"
```

**3. Request Progression**
```
"Explain this at 3 levels:
1. For a software engineer
2. For an experienced SRE
3. For a system architect"
```

**4. Validate with Official Docs**
Always cross-check AI responses with:
- Kubernetes docs: https://kubernetes.io/docs/
- AWS docs: https://docs.aws.amazon.com/
- Terraform docs: https://developer.hashicorp.com/terraform/docs

**5. Use AI for Explanation, Not Memorization**
```
❌ Bad: "Give me the answer to this interview question"
✅ Good: "Explain the concept, then help me craft my own answer based on my experience"
```

---

### 🚨 When NOT to Use AI

**Don't Use AI For**:
- Official certification exams (it's cheating)
- Take-home assignments (employers expect original work)
- Understanding YOUR production systems (need real experience)
- Replacing hands-on practice (AI can't make you type commands)
- Memorizing instead of understanding

**Always Use AI With**:
- Critical thinking (verify claims)
- Hands-on validation (test the code)
- Official documentation (cross-reference)
- Real-world practice (build actual projects)

---

Made with ❤️ by SREs, for aspiring SREs

*Last updated: February 2026*

**P.S.**: Share your AI-generated learnings with #SREWithAI on LinkedIn! 🤖🚀
