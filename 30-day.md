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

### 🎯 Why This Matters at Scale (For Experienced Engineers)

**Memory Amplification Problem:**
- You have a 2GB Python application server with 50 worker processes (pre-fork model like Gunicorn)
- Naive calculation: 2GB × 50 = 100GB RAM needed
- Reality with COW: ~15-20GB (most pages stay shared until written)
- **But**: If application has high mutation rate (writes to memory), COW duplication → actual usage approaches 100GB
- **Production case**: Redis with BGSAVE + heavy writes = 2x memory spike → OOM

**Zombie Process Impact at Scale:**
- Kubernetes nodes with 1000+ pods, each spawning child processes
- If PID 1 in containers doesn't reap zombies → accumulate
- Linux default: max 32,768 PIDs per namespace
- Seen production: 15,000 zombies → new process creation fails → cascading outages
- **Fix**: Use `tini` as PID 1, or ensure proper signal handling

**File Descriptor Inheritance:**
- Parent process has 100 open connections (sockets, files)
- fork() 20 children → all inherit those FDs
- If parent didn't set FD_CLOEXEC → children leak FDs
- **Production impact**: Reached 65,536 FD limit (ulimit -n) → accept() fails → service unavailable

### ⚠️ Production Pitfalls & War Stories

**Pitfall #1: strace in Production (The 5-10x Slowdown)**
```bash
# This killed a production service:
# Engineer attached strace to debug slow API
# strace overhead (ptrace system call interception) → 10x slower
# Service couldn't keep up with traffic → queue backlog → cascading failure

# Better approach:
# 1. Use eBPF (Day 6): <1% overhead
# 2. Use perf record: 2-3% overhead, statistical sampling
# 3. Application-level instrumentation (OpenTelemetry)
```

**Pitfall #2: Ignoring oom_score (OOM Killer Victim Selection)**
```bash
# Default: OOM killer picks process using oom_score
# Bad: Critical database gets killed because it uses most memory

# Fix: Adjust oom_score_adj (-1000 to 1000)
echo -1000 > /proc/<critical-pid>/oom_score_adj  # Never kill this
echo 1000 > /proc/<cache-pid>/oom_score_adj      # Kill this first

# Kubernetes equivalent:
# livenessProbe + readinessProbe + OOMKilled detection → auto-restart
```

**Pitfall #3: /proc Traversal at Scale**
```bash
# BAD: This brought down a production monitoring agent
for pid in /proc/[0-9]*; do
  cat $pid/status
done
# On system with 10,000 processes → forked monitoring process for each → fork bomb

# GOOD: Use optimized tools
pgrep -a java              # Find Java processes (fast, no fork)
pidstat 1 5                # CPU stats (sysstat package)
ps -eo pid,comm,rss --sort=-rss | head -20  # Top memory consumers
```

### 🔬 Advanced Deep Dive (Optional - For the Curious)

**1. What Actually Happens During fork()?**
```c
// Simplified kernel flow (Linux 5.x)
1. sys_fork() → kernel/fork.c
2. Allocate new task_struct (process control block)
3. copy_process():
   - Copy page tables (NOT pages themselves - COW optimization)
   - Mark all writable pages as read-only in BOTH parent and child
   - Set up copy-on-write handler
4. On first write to COW page:
   - Page fault (permission violation)
   - Kernel allocates new physical page
   - Copies content
   - Remaps virtual address to new page
   - Marks as writable
5. Return: child PID to parent, 0 to child (so they know their role)
```

**2. Why vfork() is Deprecated:**
- `vfork()` was optimization: child shares parent's address space until `execve()`
- Problem: Child can corrupt parent (write to parent's stack/heap)
- Modern COW + lazy page allocation made `fork()` nearly as fast
- Security risk not worth the marginal performance gain

**3. clone() vs fork() - The Truth:**
```bash
# fork() is actually a wrapper around clone()
# strace shows:
clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, ...)

# clone() allows fine-grained control:
# - CLONE_VM: Share memory space (threads)
# - CLONE_FS: Share filesystem info
# - CLONE_FILES: Share file descriptors
# - CLONE_SIGHAND: Share signal handlers
# - CLONE_THREAD: Share thread group
# - CLONE_NEWNS: New mount namespace (containers!)

# Docker/Kubernetes use clone() with namespace flags:
clone(CLONE_NEWPID | CLONE_NEWNET | CLONE_NEWNS | CLONE_NEWUTS | CLONE_NEWIPC | ...)
```

### 🎤 Interview Gotchas (Questions That Separate Seniors from Juniors)

**Q1: "strace shows read() taking 2 seconds, but network is fine. What's wrong?"**

❌ Junior answer: "Network must be slow"

✅ Senior answer: "read() is blocking. Need to determine what it's waiting for:
```bash
# 1. Is it actually network I/O?
ss -tp | grep <pid>          # Check established connections
tcpdump -i any port 443 -c 100  # Look for packet retransmits

# 2. Is it disk I/O? (Maybe buffered read)
iostat -xz 1                 # Check %util and await
lsof -p <pid> | grep REG     # What files are open?

# 3. Is it waiting on another process? (IPC, socket)
lsof -p <pid> | grep unix    # Unix domain sockets
lsof -p <pid> | grep pipe    # Pipes

# 4. Application-level blocking? (lock before I/O)
pstack <pid>                 # Stack trace (if available)
/proc/<pid>/stack            # Kernel stack

# Real case: Application held mutex while doing I/O → serialized all requests"
```

**Q2: "Process stuck in 'D' state (uninterruptible sleep). Can't kill it. What do you do?"**

❌ Junior answer: "Use kill -9"

✅ Senior answer: "Can't kill -9 (processes in D state ignore signals). Debug what it's blocked on:
```bash
# Check what kernel function it's waiting for:
cat /proc/<pid>/wchan        # Example: "io_schedule"
cat /proc/<pid>/stack        # Full kernel stack trace

# Common causes:
# 1. NFS mount hung (server unreachable)
#    → umount -f, or reboot server
# 2. Disk hardware issue (controller hung)
#    → Check: dmesg | grep -i "I/O error"
# 3. Deadlock in kernel module (rare, buggy driver)
#    → Identify with 'echo w > /proc/sysrq-trigger' (shows blocked tasks)

# Real incident: NFS server restart → all clients hung in D state
# → Had to reboot 50 app servers (no way to recover gracefully)
# → Lesson: Don't use hard NFS mounts for critical apps, use soft mounts with timeout"
```

**Q3: "You have 10,000 zombie processes. What's the root cause and how do you fix it?"**

✅ Answer:
```bash
# Zombies exist because parent didn't call wait()/waitpid()

# 1. Find parent process:
ps -eo pid,ppid,stat,comm | grep Z  # Z = zombie
# Example: All have PPID 1234

# 2. Check what PID 1234 is:
ps -p 1234 -o comm=              # Example: "gunicorn-master"

# 3. Why isn't it reaping?
# a) Application bug (forgot to handle SIGCHLD)
# b) Application hung (not processing signals)
# c) In containers: PID 1 is shell script (shells don't reap by default)

# 4. Fix:
# Short-term: Kill parent → zombies get reparented to init (PID 1) → reaped
kill 1234

# Long-term:
# - Fix application to call wait()
# - In containers, use proper init:
FROM ubuntu
RUN apt-get install tini
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["/app/server"]

# Real case: Kubernetes cluster → all nodes filled with zombies
# → PID namespace exhaustion → new pods couldn't start
# → Root cause: PID 1 in container was bash script that didn't reap
# → Fix: Updated base images to use tini"
```

### 🔗 How This Connects to Other Days

- **Day 5 (Memory & OOM)**: OOM killer uses `oom_score` calculated from process memory + adjustments. Understanding process memory from `/proc/<pid>/status` helps you predict OOM victims.

- **Day 6 (eBPF)**: eBPF is the modern replacement for `strace` in production. Both trace system calls, but eBPF has <1% overhead vs strace's 10x slowdown.

- **Day 12 (K8s Security)**: Container isolation uses `clone()` with namespace flags (CLONE_NEWPID, CLONE_NEWNET). Understanding process creation helps you understand container escapes.

- **Day 18 (Incident Management)**: Zombie accumulation is a common production incident. Methodology: Identify parent → Check if hung → Kill parent → Update deployment to use proper init.

### 📊 Numbers That Matter

- **fork() memory overhead**: ~1-2ms for small process, ~100ms for 10GB process (COW page table copy time)
- **strace overhead**: 5-10x slowdown (use eBPF in production)
- **PID limit**: Default 32,768 per namespace (can increase with `kernel.pid_max`, but zombie accumulation indicates design flaw)
- **File descriptor limit**: Default 1024 (soft), 4096 (hard) per process. System-wide: Check `cat /proc/sys/fs/file-nr`
- **Zombie accumulation rate**: If parent doesn't reap, 1 zombie per child process per second → 3,600/hour → exhaust PID namespace in ~9 hours

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

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Linux Storage & I/O Performance

**Choose one** (all free):
1. **Linux I/O and Storage** (YouTube - Learn Linux TV): https://www.youtube.com/watch?v=EqO1uJ1d5uw (18 min)
2. **Brendan Gregg's I/O Performance** (Blog): https://www.brendangregg.com/linuxperf.html (scroll to I/O section, 10 min read)
3. **Red Hat Guide - Storage Administration**: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_storage_devices/ (official docs)

**Alternative paid**:
- O'Reilly: "Systems Performance" by Brendan Gregg (Chapter 9: Disks)
- Linux Foundation: "Linux System Administration" course

**Execute** (25 min):
```bash
# 1. Monitor disk I/O utilization
iostat -xz 1

# 2. Identify unlinked open files (deleted but still consuming space)
lsof | grep deleted

# 3. Check inode usage
df -i

# 4. Find directories consuming most inodes
find / -xdev -type f | cut -d "/" -f 2 | sort | uniq -c | sort -rn | head -10
```

**Achieve**: Understand Page Cache, Dirty Pages, and fsync() performance impact.

15:50 Logic & DSA: 1. Easy: Valid Anagram.
2. Medium: Top K Frequent Elements (Analyzing frequent log errors).

16:40 Closing Sprint:

Scenario: High iowait troubleshooting: I/O thrashing vs. hardware vs. journal config.

Career: LinkedIn Post: Bash script for finding top open file descriptor consumers.

---

## Day 3: TCP Internals & Cloud Networking (VPC, Security Groups)

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): TCP/IP & Networking Fundamentals

**Choose one** (all free):
1. **Hussein Nasser - TCP/IP Explained** (YouTube): https://www.youtube.com/watch?v=qqRYkcta6IE (20 min, excellent)
2. **NetworkChuck - TCP Explained** (YouTube): https://www.youtube.com/watch?v=cA9ZJdqzOoU (18 min, beginner-friendly)
3. **AWS VPC Fundamentals** (Official Docs): https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html

**Alternative paid** (if you have subscriptions):
- O'Reilly: "TCP/IP Illustrated, Vol 1" by W. Richard Stevens (classic)
- LinkedIn Learning: "Learning Amazon Web Services Networking"

**Execute** (25 min):

**Part 1 - TCP Internals** (10 min):
```bash
# Add 200ms network delay with 50ms variance (25% correlation)
sudo tc qdisc add dev eth0 root netem delay 200ms 50ms 25%

# Monitor TCP congestion window and RTT
ss -tie | grep -A5 "ESTAB"

# View TCP stats
nstat -az | grep -i tcp

# Remove delay (cleanup)
sudo tc qdisc del dev eth0 root
```

**Part 2 - AWS VPC** (15 min):
```bash
# Create VPC with CIDR 10.0.0.0/16
aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=my-vpc}]'

# Create public subnet (10.0.1.0/24)
aws ec2 create-subnet --vpc-id <vpc-id> --cidr-block 10.0.1.0/24 --availability-zone us-east-1a

# Create private subnet (10.0.2.0/24)
aws ec2 create-subnet --vpc-id <vpc-id> --cidr-block 10.0.2.0/24 --availability-zone us-east-1b

# Create Internet Gateway
aws ec2 create-internet-gateway --tag-specifications 'ResourceType=internet-gateway,Tags=[{Key=Name,Value=my-igw}]'

# Attach IGW to VPC
aws ec2 attach-internet-gateway --internet-gateway-id <igw-id> --vpc-id <vpc-id>
```

**Achieve**: Explain BDP (Bandwidth-Delay Product), congestion control (Cubic/BBR). Master VPC CIDR planning, Security Group vs. NACL (stateful vs. stateless).

15:50 Logic & DSA: 1. Easy: Valid Parentheses.
2. Medium: Min Stack (Tracking state history - maps to VPC routing tables).

16:40 Closing Sprint:

Scenario: Proving "speed of light" vs. app bug for cross-continental API latency. Debug why EC2 instance can't reach internet (IGW vs. NAT Gateway misconfiguration).

Career: LinkedIn Post: "VPC Design Patterns That Prevent Production Outages."

## Day 4: HTTP/3 & The QUIC Protocol

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): HTTP/3 Explained (O'Reilly).
- Link: https://http3-explained.haxx.se/

**Execute** (25 min):
```bash
# 1. Test HTTP/3 support (requires curl 7.66+)
curl --http3 -v https://cloudflare-quic.com/

# 2. Capture QUIC packets with tshark
sudo tshark -i any -f "udp port 443" -Y "quic" -V

# 3. Identify QUIC Connection ID
sudo tshark -i any -f "udp port 443" -Y "quic.connection.id" -T fields -e quic.connection.id

# 4. Compare HTTP/2 vs HTTP/3 timing
curl -w "@curl-format.txt" -o /dev/null -s https://example.com

# Create curl-format.txt:
cat > curl-format.txt << 'EOF'
    time_namelookup:  %{time_namelookup}s\n
       time_connect:  %{time_connect}s\n
    time_appconnect:  %{time_appconnect}s\n
      time_redirect:  %{time_redirect}s\n
   time_pretransfer:  %{time_pretransfer}s\n
 time_starttransfer:  %{time_starttransfer}s\n
                    ----------\n
         time_total:  %{time_total}s\n
EOF
```

**Achieve**: Explain TCP vs. QUIC streams and Connection Migration (Wi-Fi to 5G).

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

## Day 6: eBPF & Kernel Observability

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): BPF Performance Tools (O'Reilly) - Introduction.
- Link: https://www.brendangregg.com/bpf-performance-tools-book.html

**Execute** (25 min):
```bash
# 1. Trace slow syscalls with histogram (shows distribution of syscall latency)
sudo bpftrace -e '
tracepoint:syscalls:sys_enter_* {
    @start[tid] = nsecs;
}
tracepoint:syscalls:sys_exit_* /@start[tid]/ {
    @duration_us = hist((nsecs - @start[tid]) / 1000);
    delete(@start[tid]);
}'

# 2. Count syscalls by process
sudo bpftrace -e 'tracepoint:syscalls:sys_enter_* { @[comm] = count(); }'

# 3. Trace file opens with filename
sudo bpftrace -e 'tracepoint:syscalls:sys_enter_openat { printf("%s opened %s\n", comm, str(args->filename)); }'

# 4. Monitor TCP connections
sudo bpftrace -e 'kprobe:tcp_connect { printf("%s connecting to port %d\n", comm, args->dport); }'
```

**Achieve**: Understand eBPF safety guarantees (verifier, no kernel panics), CO-RE (Compile Once, Run Everywhere), and BTF (BPF Type Format).

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

## Day 9: CNI & Overlay Networking

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Kubernetes Networking Deep Dive

**Choose one** (all free):
1. **Kubernetes Networking Explained** (YouTube - TechWorld with Nana): https://www.youtube.com/watch?v=5cNrTU6o3Fw (15 min, visual)
2. **Kubernetes Networking Fundamentals** (CNCF): https://www.cncf.io/blog/2021/10/13/kubernetes-networking-fundamentals/ (article, 10 min read)
3. **Calico Networking Guide** (Official): https://docs.tigera.io/calico/latest/about/ (detailed CNI explanation)

**Alternative paid**:
- O'Reilly: "Kubernetes Networking" by James Strong and Vallery Lancey
- KodeKloud: "Certified Kubernetes Administrator (CKA)" - Networking section

**Execute** (25 min):
```bash
# 1. Identify MASQUERADE rules (K8s uses this for pod-to-external traffic)
sudo iptables -t nat -L -n -v | grep MASQUERADE

# 2. Get pod network namespace
kubectl get pod <pod-name> -o jsonpath='{.status.containerStatuses[0].containerID}' | cut -d'/' -f3
docker inspect <container-id> | jq '.[0].State.Pid'

# 3. Enter pod network namespace and run tcpdump
sudo nsenter -t <pid> -n tcpdump -i eth0 -nn

# 4. Trace packet flow between pods
# On source pod:
kubectl exec -it <source-pod> -- ping <destination-pod-ip>
# On node, watch iptables counters:
watch -n1 'sudo iptables -t nat -L -n -v | grep <destination-pod-ip>'

# 5. Check CNI plugin and configuration
ls /etc/cni/net.d/
cat /etc/cni/net.d/*.conf | jq .
```

**Achieve**: Distinguish Overlay (VXLAN - encapsulation, flexible) from Underlay (BGP - native routing, better performance).

15:50 Logic & DSA: 1. Easy: Merge Two Sorted Lists.
2. Medium: Reorder List.

16:40 Closing Sprint:

Scenario: Checking for MTU mismatches and CNI encapsulation overhead in inter-pod timeouts.

## Day 10: Persistent Data & CSI

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Kubernetes Patterns (O'Reilly) - Storage.
- Link: https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050285/

**Execute** (25 min):
```bash
# 1. Create StatefulSet with PVC
kubectl apply -f - <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
spec:
  accessModes: ["ReadWriteOnce"]
  resources:
    requests:
      storage: 1Gi
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx"
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        volumeMounts:
        - name: data
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 1Gi
EOF

# 2. Check PVC and PV binding
kubectl get pvc,pv

# 3. Simulate node failure (drain node)
kubectl drain <node-name> --delete-emptydir-data --force --ignore-daemonsets

# 4. Watch pod reschedule and PVC re-attach
kubectl get pods -o wide -w

# 5. Verify data persists after node failure
kubectl exec web-0 -- cat /usr/share/nginx/html/index.html
```

**Achieve**: Master CSI lifecycle: Create → Attach → Mount → Unmount → Detach → Delete. Explain RWO (ReadWriteOnce - single node) vs. RWX (ReadWriteMany - multi-node) vs. ROX (ReadOnlyMany).

15:50 Logic & DSA: 1. Easy: Reverse Linked List.
2. Medium: Copy List with Random Pointer.

16:40 Closing Sprint:

Career: Portfolio Project #1: Build "K8s FinOps Dashboard" - Real-time cost analysis per namespace/pod using Kubecost API. Features: cost allocation, resource efficiency score, savings recommendations. Tech: React + FastAPI + Prometheus. Deploy to GitHub Pages with backend on free tier. Document ROI calculation methodology.

## Day 11: Terraform Fundamentals & Infrastructure as Code

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Terraform: Up & Running (O'Reilly) - Ch. 1-3.
- Link: https://learning.oreilly.com/library/view/terraform-up/9781098116736/

**Execute** (25 min):
```hcl
# main.tf - Simple EC2 instance
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote state with S3 + DynamoDB locking
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0" # Ubuntu 22.04
  instance_type = "t3.micro"

  lifecycle {
    create_before_destroy = true
    prevent_destroy       = false
  }

  tags = {
    Name = "terraform-example"
  }
}

# Output the instance ID
output "instance_id" {
  value = aws_instance.example.id
}
```

**Commands to run**:
```bash
# Initialize Terraform (download providers)
terraform init

# Validate configuration
terraform validate

# Preview changes (dry-run)
terraform plan

# Apply changes
terraform apply -auto-approve

# Import existing resource
terraform import aws_instance.example i-1234567890abcdef0

# Show current state
terraform show

# Destroy resources
terraform destroy -auto-approve
```

**Achieve**: Master declarative IaC, state management, workspaces. Understand lifecycle meta-arguments (create_before_destroy, prevent_destroy).

---

### 🎯 Why This Matters at Scale

**State Management is Your Biggest Risk:**
- State file contains EVERYTHING: resource IDs, secrets, outputs
- Lost state = manual cleanup of $50K+ of cloud resources
- Corrupted state = terraform thinks reality doesn't match code → destroys working infrastructure
- **Real incident**: Engineer ran `terraform destroy` on prod (pointed to wrong workspace) → $200K infrastructure gone in 5 minutes

**Dependency Hell at Scale:**
- 500-resource Terraform configuration with implicit dependencies
- One resource change triggers cascading changes (destroy/recreate)
- **Example**: Change VPC CIDR → destroys all subnets → destroys all EC2 → destroys all EBS → data loss
- Takes 2 hours to apply, halfway through → AWS API rate limit → partial state → manually fix inconsistencies

**Team Collaboration Challenges:**
- 10 engineers running terraform → state locking critical
- DynamoDB lock table prevents concurrent applies
- But: Engineer runs terraform on laptop → laptop crashes mid-apply → lock never released → all other engineers blocked
- Manual lock cleanup: `terraform force-unlock <lock-id>` (dangerous if apply actually still running)

### ⚠️ Production Pitfalls

**Pitfall #1: Hardcoded Secrets in State**
```hcl
# BAD: This secret ends up in state file (plaintext!)
resource "aws_db_instance" "main" {
  password = "SuperSecret123"  # ❌ Now in S3 state file
}

# GOOD: Use Secrets Manager + data source
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "prod/db/password"
}

resource "aws_db_instance" "main" {
  password = data.aws_secretsmanager_secret_version.db_password.secret_string
}
# State still contains password, but:
# 1. Encrypted at rest (S3 encryption)
# 2. Secret rotated independently of Terraform
# 3. Audit trail in Secrets Manager
```

**Pitfall #2: No State Locking = Concurrent Apply Disaster**
```bash
# Real incident:
# Engineer A: terraform apply (creating 50 resources)
# Engineer B: terraform apply (different changes, no lock configured)
# Result:
# - Both see same initial state
# - Both try to modify same resources
# - AWS API errors, partial success
# - State file corrupted (A's changes, B's changes, mixed)
# - Required state file surgery to recover

# Fix: ALWAYS configure state locking
terraform {
  backend "s3" {
    bucket         = "terraform-state"
    key            = "prod/state"
    dynamodb_table = "terraform-locks"  # This is critical!
  }
}
```

**Pitfall #3: Using count for Conditional Resources (DON'T)**
```hcl
# BAD: Change count from 1 to 0 → DESTROYS resource
resource "aws_instance" "app" {
  count = var.enable_instance ? 1 : 0  # ❌ Dangerous!
}

# Better: Separate config, or use create_before_destroy
# If you must delete, do it explicitly with terraform destroy -target
```

**Pitfall #4: Implicit Dependencies Cause Cascading Failures**
```hcl
# Implicit dependency: Subnet references VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id = aws_vpc.main.id  # Implicitly depends on VPC
  cidr_block = "10.0.1.0/24"
}

# Problem: Change VPC CIDR (requires replacement)
# Terraform will:
# 1. Destroy subnet (depends on VPC)
# 2. Destroy VPC
# 3. Create new VPC
# 4. Create new subnet
# Everything in that subnet is DOWN during this!

# Fix: Use explicit lifecycle + create_before_destroy
resource "aws_vpc" "main" {
  lifecycle {
    create_before_destroy = true
  }
}
```

### 🔬 Advanced Deep Dive

**Terraform State: What's Actually Stored?**
```json
{
  "version": 4,
  "terraform_version": "1.5.0",
  "serial": 123,  // Increments on each change (optimistic locking)
  "lineage": "abc-123",  // Unique ID for this state (detects state file forks)
  "resources": [
    {
      "mode": "managed",
      "type": "aws_instance",
      "name": "example",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "attributes": {
            "id": "i-1234567890abcdef0",
            "private_ip": "10.0.1.50",
            "password": "ThisIsStoredInPlaintext"  // ⚠️ Security risk!
          },
          "sensitive_attributes": [
            {
              "type": "get_attr",
              "value": "password"
            }
          ]
        }
      ]
    }
  ]
}
```

**Dependency Graph (DAG) Resolution:**
```bash
# Visualize dependencies
terraform graph | dot -Tpng > graph.png

# Terraform builds a DAG (Directed Acyclic Graph)
# Nodes = resources
# Edges = dependencies

# Parallelization:
# Terraform applies resources in parallel when possible
# Example: 10 independent EC2 instances → created simultaneously
# But: VPC → Subnet → EC2 must be sequential

# If cycle detected → error:
# "Cycle: aws_route_table.public -> aws_route.internet -> aws_route_table.public"
```

**State Locking with DynamoDB:**
```bash
# What happens during terraform apply:
1. Acquire lock (PutItem to DynamoDB with conditional write)
   - Key: "md5(state_path)"
   - Attributes: {"LockID": "uuid", "Who": "user@host", "Created": "timestamp"}

2. If lock exists and not expired:
   - Terraform waits (polls every 2 seconds)
   - After 15 minutes → error (force-unlock required)

3. Apply changes

4. Release lock (DeleteItem from DynamoDB)

# If terraform crashes:
# - Lock remains in DynamoDB
# - Next apply sees lock → blocks
# - Manual cleanup:
terraform force-unlock <lock-id>  # Get lock-id from error message
# Dangerous: Only do if you're SURE no apply is running
```

### 🎤 Interview Gotchas

**Q: "How would you migrate 500 EC2 instances from manually created to Terraform-managed?"**

❌ Bad answer: "Use terraform import for each"

✅ Good answer:
```bash
# Manual approach doesn't scale (500 * 2 minutes = 16 hours)

# Better: Use terraformer or similar tool
# https://github.com/GoogleCloudPlatform/terraformer

# 1. Auto-generate Terraform code from existing AWS resources
terraformer import aws --resources=ec2_instance --regions=us-east-1

# 2. Review generated code (clean up, add variables, organize modules)

# 3. Import state in batches
# Create script:
for instance_id in $(aws ec2 describe-instances --query 'Reservations[].Instances[].InstanceId' --output text); do
  terraform import "module.ec2.aws_instance.imported[\"$instance_id\"]" "$instance_id"
done

# 4. Validate: terraform plan should show NO changes
terraform plan | grep "No changes"

# Real case: Migrated 2,000 resources using this approach
# Took 2 weeks (mostly code review and testing)
# Alternative (manual): Would have taken 6+ months
```

**Q: "State file is corrupted. How do you recover?"**

✅ Answer:
```bash
# State corruption causes:
# 1. Concurrent applies without locking
# 2. Manual state file edits
# 3. Terraform crash during state write
# 4. S3 versioning enabled → wrong version pulled

# Recovery steps:

# 1. Check S3 versions (if versioning enabled)
aws s3api list-object-versions --bucket terraform-state --prefix prod/terraform.tfstate

# 2. Download previous version
aws s3api get-object --bucket terraform-state --key prod/terraform.tfstate --version-id <version-id> state-backup.json

# 3. Compare with current AWS state
terraform refresh  # Updates state from AWS (doesn't modify resources)

# 4. If refresh fails, manual state surgery:
# - terraform state list  (list all resources)
# - terraform state show <resource>  (inspect specific resource)
# - terraform state rm <resource>  (remove from state)
# - terraform import <resource> <id>  (re-import correct state)

# 5. Validate
terraform plan  # Should match reality

# Prevention:
# - Enable S3 versioning
# - State file backups (automated)
# - State locking (DynamoDB)
# - Never edit state file manually (use terraform state commands)
```

**Q: "Terraform vs CloudFormation vs Pulumi - when would you use each?"**

| Feature | Terraform | CloudFormation | Pulumi |
|---------|-----------|----------------|---------|
| **Multi-cloud** | ✅ AWS, GCP, Azure | ❌ AWS only | ✅ All clouds |
| **Language** | HCL (declarative) | YAML/JSON | Python, TypeScript, Go |
| **State management** | Manual (S3 + DynamoDB) | AWS-managed | Cloud-managed |
| **Provider ecosystem** | Huge (1000+) | AWS services only | Growing |
| **Learning curve** | Medium | Low (if know YAML) | Low (if know Python) |
| **Team size** | Any (most popular) | AWS-only shops | Small teams (newer) |
| **Cost** | Free (OSS) | Free | Free tier, paid for teams |

**When to use:**
- **Terraform**: Multi-cloud, large teams, mature ecosystem (most common choice)
- **CloudFormation**: AWS-only, simple deployments, tight AWS integration, no external state management
- **Pulumi**: Developers who hate HCL, want to use real programming languages, complex logic in IaC

**Real experience**: Started with CloudFormation → hit limits (complex logic, multi-cloud) → migrated to Terraform → much more flexible but state management overhead

### 🔗 Connections to Other Days

- **Day 13 (GitOps)**: ArgoCD for K8s is like Terraform for cloud infrastructure - declarative desired state
- **Day 29 (FinOps)**: Terraform state shows all resources → can tag resources for cost allocation → automated cost tracking
- **Day 18 (Incidents)**: "terraform apply destroyed production" is a common P0 incident. Prevention: CI/CD pipeline, approval gates, blast radius limits

### 📊 Numbers That Matter

- **State file size**: 1 KB per resource average → 1000 resources = 1 MB state file
- **Apply time**: ~2 seconds per resource → 500 resources = 16 minutes (parallelization helps, but limited by dependency chains)
- **Lock timeout**: Default 15 minutes → if terraform crashes, other engineers blocked for 15 min (unless force-unlock)
- **API rate limits**: AWS ~100 API calls/second → large terraform applies can hit limits → need exponential backoff
- **S3 state file cost**: Negligible ($0.023 per GB/month), but state file access: 1000s of GET requests per day across team → $1-5/month

---

15:50 Logic & DSA: 1. Easy: Implement Queue using Stacks (state machines - maps to Terraform state transitions).
2. Medium: Evaluate Reverse Polish Notation (dependency resolution - maps to Terraform resource DAG).

16:40 Closing Sprint:

Scenario: Debugging "resource already exists" error. Demonstrate terraform import. Pitch Terraform vs. CloudFormation vs. Pulumi to engineering manager.

Career: LinkedIn Post: "5 Terraform Anti-Patterns That Cost Us $10K/Month."

## Day 12: Kubernetes Security, RBAC, OIDC & Secrets Management

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Kubernetes Security (O'Reilly) - Ch. 4.
- Link: https://learning.oreilly.com/library/view/kubernetes-security/9781492039075/

**Execute** (25 min):

**Part 1 - RBAC** (10 min):
```bash
# 1. Create ServiceAccount
kubectl create serviceaccount my-sa

# 2. Create ClusterRole (least-privilege: read-only pods)
kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
EOF

# 3. Create RoleBinding (bind ServiceAccount to ClusterRole)
kubectl create rolebinding my-sa-binding \
  --clusterrole=pod-reader \
  --serviceaccount=default:my-sa \
  --namespace=default

# 4. Test permissions
kubectl auth can-i get pods --as=system:serviceaccount:default:my-sa
kubectl auth can-i delete pods --as=system:serviceaccount:default:my-sa  # Should return "no"

# 5. View effective permissions
kubectl auth can-i --list --as=system:serviceaccount:default:my-sa
```

**Part 2 - External Secrets Operator** (15 min):
```bash
# 1. Install External Secrets Operator
helm repo add external-secrets https://charts.external-secrets.io
helm install external-secrets external-secrets/external-secrets -n external-secrets-system --create-namespace

# 2. Create SecretStore (AWS Secrets Manager backend)
kubectl apply -f - <<EOF
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: aws-secretsmanager
  namespace: default
spec:
  provider:
    aws:
      service: SecretsManager
      region: us-east-1
      auth:
        jwt:
          serviceAccountRef:
            name: external-secrets-sa
EOF

# 3. Create ExternalSecret (sync from AWS)
kubectl apply -f - <<EOF
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: database-credentials
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: aws-secretsmanager
    kind: SecretStore
  target:
    name: db-secret
    creationPolicy: Owner
  data:
  - secretKey: password
    remoteRef:
      key: prod/database/password
EOF

# 4. Verify secret synced
kubectl get externalsecret database-credentials
kubectl get secret db-secret -o yaml
```

**Achieve**: Understand least-privilege design, BoundServiceAccountTokenVolume, OIDC token flow. Master secrets management (sealed-secrets, external-secrets, Vault integration). **Never store secrets in Git!**

15:50 Logic & DSA: 1. Easy: Diameter of Binary Tree (trust chains - maps to certificate chains).
2. Medium: Validate Binary Search Tree (access control hierarchy validation).

16:40 Closing Sprint:

Scenario: Auditing unexpected pod escalations via kubectl audit logs. Investigate secret leakage via pod logs. Pitch zero-trust architecture with service mesh mTLS.

Career: LinkedIn Post: "RBAC Anti-Patterns That Create Production Vulnerabilities + How We Implemented Zero-Trust K8s."

## Day 13: StatefulSets, Headless Services & GitOps with ArgoCD

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Managing Kubernetes (O'Reilly) - StatefulSets.
- Link: https://learning.oreilly.com/library/view/managing-kubernetes/9781492033905/

**Execute** (25 min):

**Part 1 - StatefulSets** (10 min):
```bash
# 1. Deploy StatefulSet with headless service
kubectl apply -f - <<EOF
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 80
    name: web
  clusterIP: None  # Headless service
  selector:
    app: nginx
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 1Gi
EOF

# 2. Verify stable network identity (each pod gets predictable DNS)
kubectl run -it --rm debug --image=busybox --restart=Never -- nslookup web-0.nginx.default.svc.cluster.local
kubectl run -it --rm debug --image=busybox --restart=Never -- nslookup web-1.nginx.default.svc.cluster.local

# 3. Check ordinal index and PVC
kubectl get pods -l app=nginx
kubectl get pvc
```

**Part 2 - GitOps with ArgoCD** (15 min):
```bash
# 1. Install ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# 2. Access ArgoCD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# 3. Get initial admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# 4. Create ArgoCD application (GitOps)
kubectl apply -f - <<EOF
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/yourusername/k8s-manifests
    targetRevision: HEAD
    path: manifests
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true
EOF

# 5. Check sync status
kubectl get applications -n argocd
argocd app list
argocd app sync my-app
```

**Achieve**: Master ordinal index (web-0, web-1, web-2), PVC retention, podManagementPolicy (OrderedReady vs Parallel). Understand GitOps principles (Git as single source of truth), ArgoCD sync strategies (auto vs. manual), app-of-apps pattern.

15:50 Logic & DSA: 1. Easy: Invert Binary Tree (state reconciliation - maps to GitOps desired state).
2. Medium: Construct Binary Tree from Preorder and Inorder (DAG construction - maps to ArgoCD app dependencies).

16:40 Closing Sprint:

Scenario: Debugging Cassandra split-brain during rolling restart. Compare kubectl apply vs. GitOps deployment for audit trail and rollback capabilities.

Career: LinkedIn Post: "How GitOps Reduced Our Deployment Incidents by 80%."

## Day 14: CI/CD Pipelines & Pipeline Security (DevSecOps)

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Continuous Delivery in Practice (O'Reilly) - CI/CD Pipelines.
- Link: https://learning.oreilly.com/library/view/continuous-delivery/9780136892656/

**Execute** (25 min):

Create `.github/workflows/ci-cd.yml`:
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  id-token: write  # OIDC authentication
  contents: read
  security-events: write

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Lint code
        run: |
          pip install flake8
          flake8 . --count --max-line-length=127

      - name: Run tests
        run: |
          pip install pytest pytest-cov
          pytest --cov=. --cov-report=xml

  security-scan:
    runs-on: ubuntu-latest
    needs: lint-and-test
    steps:
      - uses: actions/checkout@v4

      - name: Secret scanning (gitleaks)
        uses: gitleaks/gitleaks-action@v2

      - name: Dependency scanning (Snyk)
        uses: snyk/actions/python@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .

      - name: Container scanning (Trivy)
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: myapp:${{ github.sha }}
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'

      - name: Generate SBOM
        run: |
          curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
          syft myapp:${{ github.sha }} -o cyclonedx-json > sbom.json

      - name: Upload SBOM artifact
        uses: actions/upload-artifact@v4
        with:
          name: sbom
          path: sbom.json

  deploy:
    runs-on: ubuntu-latest
    needs: security-scan
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Configure AWS credentials (OIDC - no long-lived secrets!)
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/GitHubActions
          aws-region: us-east-1

      - name: Login to ECR
        run: |
          aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com

      - name: Push image to ECR
        run: |
          docker tag myapp:${{ github.sha }} 123456789012.dkr.ecr.us-east-1.amazonaws.com/myapp:${{ github.sha }}
          docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/myapp:${{ github.sha }}

      - name: Update K8s manifest (trigger ArgoCD sync)
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          sed -i "s|image: .*|image: 123456789012.dkr.ecr.us-east-1.amazonaws.com/myapp:${{ github.sha }}|" k8s/deployment.yaml
          git add k8s/deployment.yaml
          git commit -m "Update image to ${{ github.sha }}"
          git push
```

**Branch Protection Setup**:
```bash
# Via GitHub CLI
gh repo edit --enable-branch-protection main \
  --require-status-checks lint-and-test,security-scan \
  --require-pull-request-reviews 2 \
  --require-signed-commits
```

**Achieve**: Master CI/CD stages, pipeline-as-code, security gates (SAST, DAST, SCA). Understand shift-left security, artifact attestation, supply chain security (SLSA framework).

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

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Prometheus: Up & Running (O'Reilly) - Ch. 4.
- Link: https://learning.oreilly.com/library/view/prometheus-up/9781492034131/

**Execute** (25 min):
```promql
# 1. Calculate p95 and p99 latency using histogram_quantile
histogram_quantile(0.95,
  rate(http_request_duration_seconds_bucket[5m])
)

histogram_quantile(0.99,
  rate(http_request_duration_seconds_bucket[5m])
)

# 2. Calculate availability SLO (99.9% = error rate < 0.1%)
(
  sum(rate(http_requests_total{code!~"5.."}[30d]))
  /
  sum(rate(http_requests_total[30d]))
) > 0.999

# 3. Identify high-cardinality metrics (>10K series)
topk(10, count by (__name__)({__name__=~".+"}))

# 4. Find metrics with most labels (cardinality explosion indicator)
topk(10, count by (__name__)(group by (__name__, job, instance, pod, namespace)({__name__=~".+"})))

# 5. Simulate cardinality explosion (DON'T DO THIS IN PROD!)
# Example of BAD practice: Using UUID in labels
# http_requests_total{user_id="550e8400-e29b-41d4-a716-446655440000"}  # BAD!
# Good practice: Use it as a dimension in logs, not metrics
```

**Check cardinality via Prometheus API**:
```bash
# Get total series count
curl -s http://localhost:9090/api/v1/status/tsdb | jq .data.seriesCountByMetricName

# Find metrics with highest cardinality
curl -s 'http://localhost:9090/api/v1/label/__name__/values' | \
  jq -r '.data[]' | \
  while read metric; do
    count=$(curl -s "http://localhost:9090/api/v1/query?query=count($metric)" | jq -r '.data.result[0].value[1]')
    echo "$count $metric"
  done | sort -rn | head -20
```

**Achieve**: Explain why high cardinality kills Prometheus memory (each unique label combination = new time series = more RAM). 1M series ≈ 1-2GB RAM.

15:50 Logic & DSA: 1. Easy: Kth Largest Element in a Stream.
2. Medium: Kth Largest Element in an Array (Heap logic).

16:40 Closing Sprint:

Scenario: Slow-loading dashboards: identifying "heavy" queries and namespace label optimization.

## Day 16: SLOs, SLIs, and Error Budgets

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Implementing Service Level Objectives (O'Reilly).
- Link: https://learning.oreilly.com/library/view/implementing-service-level/9781492076803/

**Execute** (25 min):
```python
# 1. Calculate error budget from SLO
slo_target = 0.999  # 99.9% availability
error_budget_percentage = 1 - slo_target  # 0.001 = 0.1%

# For 30-day month
days_per_month = 30
minutes_per_day = 24 * 60
total_minutes = days_per_month * minutes_per_day  # 43,200 minutes
error_budget_minutes = total_minutes * error_budget_percentage  # 43.2 minutes

print(f"99.9% SLO allows {error_budget_minutes:.1f} minutes of downtime per month")

# 2. Calculate current error budget consumption
total_requests = 10_000_000
failed_requests = 5_000
error_rate = failed_requests / total_requests  # 0.0005 = 0.05%
budget_consumed = (error_rate / error_budget_percentage) * 100  # 50%

print(f"Current error rate: {error_rate:.4%}")
print(f"Error budget consumed: {budget_consumed:.1f}%")
print(f"Remaining budget: {100 - budget_consumed:.1f}%")
```

**PromQL queries for SLO monitoring**:
```promql
# Request-based SLI (availability)
(
  sum(rate(http_requests_total{code!~"5.."}[30d]))
  /
  sum(rate(http_requests_total[30d]))
)

# Latency SLI (p99 < 500ms for 99% of requests)
histogram_quantile(0.99,
  rate(http_request_duration_seconds_bucket[5m])
) < 0.5

# Multi-window burn rate alert (page immediately if burning too fast)
# Alert if: (5m burn > 14.4x AND 1h burn > 14.4x) OR (30m burn > 6x AND 6h burn > 6x)
(
  (
    (1 - sum(rate(http_requests_total{code!~"5.."}[5m])) / sum(rate(http_requests_total[5m]))) > 14.4 * 0.001
    and
    (1 - sum(rate(http_requests_total{code!~"5.."}[1h])) / sum(rate(http_requests_total[1h]))) > 14.4 * 0.001
  )
  or
  (
    (1 - sum(rate(http_requests_total{code!~"5.."}[30m])) / sum(rate(http_requests_total[30m]))) > 6 * 0.001
    and
    (1 - sum(rate(http_requests_total{code!~"5.."}[6h])) / sum(rate(http_requests_total[6h]))) > 6 * 0.001
  )
)
```

**Achieve**: Master Request-based (count good/bad requests) vs. Window-based (uptime windows) SLIs. Understand burn rate alerts (detect when consuming error budget too fast).

---

### 🎯 Why This Matters at Scale (For Experienced Engineers)

**Error Budgets Are Currency for Innovation:**
- Traditional mindset: "Never have outages" → fear of change → slow innovation
- SRE mindset: "100% availability is wrong target" → 99.9% allows 43.2 min downtime/month → **spend this budget on velocity**
- Real example: Team ships 5 deploys/month carefully → switch to error budget model → 50 deploys/month → faster features, same reliability
- Key insight: If you're not spending error budget, you're being too conservative

**The Math That Changes Behavior:**
```python
# 99.9% SLO = 43.2 minutes downtime allowed per month
# Your outage: 10 minutes
# Error budget consumed: 10/43.2 = 23%

# Decision framework:
if budget_consumed < 70%:
    "Green: Ship new features aggressively"
elif budget_consumed < 100%:
    "Yellow: Focus on reliability for rest of month"
else:
    "Red: Feature freeze, only reliability work"

# This objective framework prevents:
# - "That outage was too long!" (subjective)
# - Political blame games
# - Overreaction to normal incidents
```

**Multi-Window Burn Rate Prevents Alert Fatigue:**
- Simple alert: `error_rate > 0.1%` → fires constantly (spiky traffic)
- Burn rate: "At current error rate, how fast are we consuming budget?"
- 14.4x burn rate = exhaust monthly budget in 2 days → **page immediately**
- 6x burn rate = exhaust in 5 days → **ticket for next business day**
- Prevents: Alert on every blip, miss the real fire

### ⚠️ Production Pitfalls

**Pitfall #1: Choosing Wrong SLI (Most Common Mistake)**
```python
# BAD SLIs (common mistakes):
# 1. "Our API returns 200 OK 99.9% of time"
#    Problem: What if 200 OK but response takes 30 seconds? Users see failure.

# 2. "Our servers are up 99.9% of time"
#    Problem: Users don't care about server uptime, they care about request success.

# 3. "Average latency < 100ms"
#    Problem: Average hides tail latency. 99% fast, 1% timing out = poor UX.

# GOOD SLIs (user-focused):
# 1. "99% of API requests complete successfully in < 500ms"
#    - Success = 2xx status AND latency < 500ms
#    - Captures both availability and latency
#    - Uses percentile (p99), not average

# 2. "95% of login attempts succeed in < 2 seconds"
#    - User journey based
#    - Accounts for expected failures (wrong password = not error)

# 3. "99.9% of writes are durable (not lost)"
#    - For databases
#    - Measures data integrity
```

**Pitfall #2: SLO Too Strict (The 99.99% Trap)**
```python
# 99.99% SLO = 4.32 minutes downtime/month

# Sounds good, but:
# - AWS S3 SLA: 99.9% (they don't promise 99.99%!)
# - If you depend on S3, your SLO is capped at 99.9%
# - Cost: 99.99% requires 10x redundancy compared to 99.9%
# - Opportunity cost: Team spends 80% time on reliability, 20% on features

# Better: Start with 99.5% or 99.9%, measure actual performance
# If you're hitting 99.95% consistently, then tighten to 99.9%
# If you're missing 99.9%, loosen to 99.5% or invest in reliability

# Real case: Team set 99.99% SLO → missed every month → demoralized
# → Changed to 99.5% → hit it easily → built confidence → gradually improved
```

**Pitfall #3: Not Excluding Expected Failures**
```python
# BAD: Count all 4xx errors as failures
error_rate = (status_4xx_count + status_5xx_count) / total_requests

# Problem:
# - 401 Unauthorized (bad API key) = user error, not service failure
# - 404 Not Found (user typo) = expected, not your fault
# - 429 Rate Limit (user exceeding quota) = intended behavior

# GOOD: Only count unexpected failures
# Success: 2xx, 3xx, 4xx (expected user errors)
# Failure: 5xx (server errors), timeouts, network errors

success_count = requests{code=~"[2-4].."}
failure_count = requests{code=~"5.."} + timeouts + network_errors

# Real incident: Team counted 404s as failures
# → Crawler bot hit site with bad URLs → error budget exhausted in 1 day
# → Feature freeze even though real users unaffected
```

**Pitfall #4: Burn Rate Windows Too Short (False Alarms)**
```promql
# BAD: Alert on 1-minute error rate spike
error_rate_1m > threshold

# Problem: Normal traffic spikes (deploy, cache expiration) trigger alerts
# Team gets paged → checks → "everything's fine now" → alert fatigue

# GOOD: Multi-window burn rate
# Must meet BOTH short AND long window conditions
# Example: (5m burn > 14.4x) AND (1h burn > 14.4x)
# Filters out temporary blips, catches sustained issues

# Real numbers from production:
# - Single window (1m): 50 false alarms/month
# - Multi-window (5m AND 1h): 3 alerts/month (all real issues)
```

### 🔬 Advanced Deep Dive

**Where Does 14.4x Burn Rate Come From?**
```python
# SLO: 99.9% availability (0.1% error budget)
# Monthly budget: 43.2 minutes

# If you burn at 14.4x rate:
budget_exhaustion_time = 30 days / 14.4 = 2.08 days

# Google's research: 2 days gives you time to:
# 1. Detect problem (multi-window filter prevents false alarms)
# 2. Page oncall
# 3. Investigate
# 4. Deploy fix
# 5. Recover before budget exhausted

# Other common thresholds:
# - 14.4x = 2 days → page immediately
# - 6x = 5 days → create ticket (investigate during business hours)
# - 3x = 10 days → monitor (may be normal variance)

# Formula:
burn_rate_threshold = (SLO_window_days / acceptable_response_time_days)
# Example: 30 days / 2 days = 15x (rounded to 14.4 in practice)
```

**Request-Based vs Window-Based SLIs:**
```python
# Request-based (most common for APIs):
SLI = successful_requests / total_requests
# Pros:
# - Accurate (counts every request)
# - Good for high-volume services (millions of requests/day)
# - Aligns with user experience (each request matters)
# Cons:
# - Requires instrumentation (count every request)
# - Doesn't work for batch jobs (single job = single request?)

# Window-based (useful for uptime monitoring):
SLI = successful_probes / total_probes
# Example: Probe every 10 seconds, success = 200 OK
# Pros:
# - Simple (external monitoring, no instrumentation)
# - Works for services that don't have "requests" (batch jobs)
# Cons:
# - Coarse granularity (1 failed probe = 10 seconds downtime)
# - Doesn't capture user volume (1 probe failure at 2 AM = same weight as 2 PM)

# Hybrid approach (best):
# Use request-based for SLI calculation
# Use window-based for external validation (synthetic monitoring)
```

**Calculating SLOs for Dependent Services:**
```python
# Your service depends on:
# - Database (99.95% SLA)
# - Cache (99.9% SLA)
# - External API (99.5% SLA)

# Naive calculation (series):
combined_slo = 0.9995 * 0.999 * 0.995 = 0.9935 = 99.35%
# Your service can't be more reliable than weakest dependency

# With graceful degradation:
# - Cache miss → database (slower but works)
# - External API timeout → cached response (stale but works)
# Then your SLO can exceed dependencies

# Real example:
# Dependency chain: 5 services × 99.9% each = 99.5% combined
# Can't promise 99.9% SLO to customers (would violate constantly)
# Solution:
# 1. Add redundancy (multiple API providers)
# 2. Graceful degradation (serve cached/stale data)
# 3. Set realistic SLO (99.5% based on dependencies)
```

### 🎤 Interview Gotchas

**Q: "Your team is consistently hitting 99.95% availability, but SLO is 99.9%. Should you tighten the SLO?"**

❌ Junior answer: "Yes, we're exceeding expectations"

✅ Senior answer: "Not necessarily. Questions to ask:

1. **Are we spending error budget on velocity?**
   - If we're deploying 50x/month and still hitting 99.95%, we have room for more velocity
   - If we're deploying 2x/month cautiously, we're being too conservative

2. **Is 99.95% sustainable?**
   - Maybe we got lucky this month (no major incidents)
   - Need 6-12 months of data to confirm consistency

3. **What's the cost of 99.95% vs 99.9%?**
   - If 99.95% requires 2x infrastructure cost, it's waste
   - If we're hitting it naturally, no extra cost

4. **Do users care about the difference?**
   - 99.9% = 43.2 min downtime/month
   - 99.95% = 21.6 min downtime/month
   - For most services, users don't notice 20 min difference
   - For payment processing, they might

**Better approach:**
- Keep SLO at 99.9%
- Use extra reliability budget to deploy faster
- Monitor if faster deploys consume budget → steady state achieved
- Only tighten SLO if users complain or business requires it"

**Q: "We had a 15-minute outage (100% error rate). How much error budget did we consume?"**

❌ Wrong answer: "15 minutes out of 43.2 minutes = 35%"

✅ Right answer: "Need more information. Error budget depends on **request volume**:

```python
# Scenario 1: Low-traffic period (2 AM)
requests_during_outage = 10_000
total_requests_per_month = 100_000_000
error_budget_consumed = 10_000 / 100_000_000 = 0.01% of budget

# Scenario 2: High-traffic period (2 PM)
requests_during_outage = 500_000
error_budget_consumed = 500_000 / 100_000_000 = 0.5% of budget

# Key insight:
# - Time-based error budget (43.2 minutes) only works for window-based SLIs
# - Request-based SLIs: outage impact depends on traffic volume at time of failure
# - 15-minute outage at 2 AM << 15-minute outage at Black Friday peak
```

This is why Google uses **request-based** error budgets, not time-based."

**Q: "Should we set different SLOs for different endpoints?"**

✅ Answer: "Yes, for user-facing APIs:

```python
# Internal endpoints (admin dashboard):
SLO = 99.0%  # Lower, users are employees, can tolerate more failures

# Public API (free tier):
SLO = 99.5%  # Medium, users expect good service but know it's free

# Payment processing:
SLO = 99.95%  # Higher, losing payments = losing money

# Critical auth:
SLO = 99.99%  # Highest, if users can't log in, they can't do anything
```

**But don't go overboard:**
- Start with service-level SLO (one for whole service)
- Only split if:
  1. Different user expectations
  2. Different business criticality
  3. Different technical constraints
- Too many SLOs = impossible to manage → alert fatigue

**Real example:**
- Started with 50 endpoint-level SLOs
- Team couldn't track which ones were important
- Consolidated to 5 user-journey SLOs
- Much clearer, actionable"

### 🔗 Connections to Other Days

- **Day 15 (PromQL)**: SLI queries use `histogram_quantile()` for latency SLIs. High cardinality in labels breaks SLO calculations.
- **Day 19 (Alerting)**: Multi-window burn rate alerts implement SLO-based alerting (symptoms, not causes).
- **Day 18 (Incidents)**: During incidents, track error budget consumption in real-time. "We've consumed 15% of monthly budget in 1 hour."
- **Day 29 (FinOps)**: Error budget is like cloud cost budget. Both require: measurement, monitoring, trade-offs (speed vs cost, speed vs reliability).

### 📊 Numbers That Matter

| SLO | Downtime/Month | Downtime/Year | Use Case |
|-----|----------------|---------------|----------|
| 99% | 7.2 hours | 3.65 days | Internal tools, non-critical |
| 99.5% | 3.6 hours | 1.83 days | Public API, good service |
| 99.9% | 43.2 min | 8.76 hours | Production services (common) |
| 99.95% | 21.6 min | 4.38 hours | Payment processing |
| 99.99% | 4.32 min | 52.56 min | Critical infrastructure (expensive!) |
| 99.999% | 26 sec | 5.26 min | Telco (five-nines, very expensive) |

**Burn rate alert thresholds:**
- **Page immediately (P0)**: 14.4x burn (budget exhausted in 2 days)
- **Next business day (P2)**: 6x burn (budget exhausted in 5 days)
- **Monitor only**: 3x burn (budget exhausted in 10 days)

**Real-world SLO examples:**
- Google Search: 99.9% availability (they publicly publish this)
- AWS S3: 99.9% availability (per SLA)
- Stripe API: 99.99% availability (payment critical)
- Netflix: 99.9% availability (can tolerate brief outages)

---

15:50 Logic & DSA: 1. Easy: Contains Duplicate.
2. Medium: Product of Array Except Self.

16:40 Closing Sprint:

Scenario: Defending a controlled rollout that consumed 20% of monthly error budget.

Career: LinkedIn Post: "Why Error Budgets Changed How We Ship Features."

## Day 17: Container Security & Policy Enforcement (OPA, Falco)

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Container Security (O'Reilly) - Runtime Security.
- Link: https://learning.oreilly.com/library/view/container-security/9781492056690/

**Execute** (25 min):

**Part 1 - Falco Runtime Security** (8 min):
```bash
# 1. Install Falco
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm install falco falcosecurity/falco --namespace falco --create-namespace

# 2. Create custom Falco rule
kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: falco-rules
  namespace: falco
data:
  custom-rules.yaml: |
    - rule: Unauthorized file access
      desc: Detect when sensitive files are accessed
      condition: open_read and container and fd.name in (/etc/shadow, /etc/sudoers)
      output: "Sensitive file opened (user=%user.name file=%fd.name container=%container.name)"
      priority: WARNING

    - rule: Privilege escalation attempt
      desc: Detect privilege escalation in containers
      condition: container and spawned_process and proc.name in (sudo, su)
      output: "Privilege escalation detected (user=%user.name command=%proc.cmdline container=%container.name)"
      priority: CRITICAL
EOF

# 3. Test Falco (trigger alert)
kubectl run test-pod --image=alpine -- /bin/sh -c "cat /etc/shadow"

# 4. View Falco alerts
kubectl logs -n falco -l app.kubernetes.io/name=falco | grep "Sensitive file opened"
```

**Part 2 - OPA Gatekeeper** (10 min):
```bash
# 1. Install Gatekeeper
kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/deploy/gatekeeper.yaml

# 2. Create ConstraintTemplate (block privileged pods)
kubectl apply -f - <<EOF
apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8spspprivilegedcontainer
spec:
  crd:
    spec:
      names:
        kind: K8sPSPPrivilegedContainer
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8spspprivileged

        violation[{"msg": msg}] {
          c := input.review.object.spec.containers[_]
          c.securityContext.privileged
          msg := sprintf("Privileged container is not allowed: %v", [c.name])
        }
EOF

# 3. Create Constraint (enforce policy)
kubectl apply -f - <<EOF
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sPSPPrivilegedContainer
metadata:
  name: block-privileged-pods
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
EOF

# 4. Test policy (should be blocked)
kubectl run privileged-pod --image=nginx --privileged=true
# Expected: Error from server: admission webhook denied the request
```

**Part 3 - Container Scanning** (7 min):
```bash
# 1. Scan image with Trivy
trivy image nginx:latest --severity HIGH,CRITICAL

# 2. Scan with JSON output (for automation)
trivy image nginx:latest --format json --output trivy-report.json

# 3. Scan filesystem for IaC misconfigurations
trivy fs . --scanners config,secret

# 4. Block deployment with critical CVEs in CI/CD
trivy image myapp:latest --exit-code 1 --severity CRITICAL
# exit-code 1 = fail pipeline if critical CVE found
```

**Achieve**: Understand container security layers (image scanning → admission control → runtime detection). Master admission controllers, Pod Security Standards (restricted/baseline/privileged), runtime detection (Falco) vs. prevention (OPA).

15:50 Logic & DSA: 1. Easy: Missing Number (anomaly detection - maps to security outliers).
2. Medium: Find the Duplicate Number (finding compromised containers in fleet).

16:40 Closing Sprint:

Scenario: Falco alert triggers on production pod accessing /etc/shadow. Investigate if breach or misconfigured app. Demonstrate incident response: isolate pod, capture forensics, rotate credentials.

Career: LinkedIn Post: "How We Prevented a Container Breakout Using Runtime Security."

## Day 18: Incident Management, Communication & Stakeholder Updates

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): SRE Workbook (O'Reilly) - Ch. 9 & Incident Management.
- Link: https://learning.oreilly.com/library/view/the-site-reliability-workbook/9781492029496/

**Execute** (25 min):

**Part 1 - Log Analysis** (10 min):
```bash
# 1. Find errors in multi-GB logs (efficient)
zcat /var/log/app/app.log.*.gz | grep -i error | tail -1000

# 2. Trace correlation IDs across services
correlation_id="abc-123-def"
grep -r "$correlation_id" /var/log/ --include="*.log"

# 3. Filter JSON logs with jq
cat app.log | jq 'select(.level == "error" or .level == "fatal")'

# 4. Extract top error messages
cat app.log | jq -r 'select(.level == "error") | .message' | sort | uniq -c | sort -rn | head -20

# 5. Find slow requests (>5 seconds)
cat app.log | jq 'select(.duration_ms > 5000) | {timestamp, duration_ms, endpoint, user_id}'

# 6. Parse with awk (non-JSON logs)
awk '/error/ {count[$5]++} END {for (msg in count) print count[msg], msg}' /var/log/app.log | sort -rn
```

**Part 2 - Incident Communication** (15 min):

**Initial Notification Template**:
```
Subject: [P1] Payment Processing Delays - Investigating

Status: INVESTIGATING
Impact: Payment processing delayed 2-3 minutes. No data loss.
Started: 2024-01-15 14:30 PST
Next Update: 15:00 PST (in 30 min)

What Happened:
- Database replication lag increased to 180 seconds
- Payment confirmations delayed
- No transactions lost

What We're Doing:
- Incident Commander: Alice (SRE)
- Investigating replica database performance
- Payments queuing for retry
- No customer action needed

Customer Impact:
- Low: Payments delayed but will process
- 0.5% of users affected
```

**Technical to Executive Translation**:
```
❌ Technical: "Database replication lag is 180 seconds due to long-running query blocking the SQL thread"

✅ Executive: "Payment processing is delayed 2-3 minutes. We've identified the cause and are implementing a fix. ETA: 30 minutes. No revenue loss."

❌ Technical: "CPU throttling on pod web-7d9f8b due to hitting resource limits"

✅ Executive: "Website experiencing slow page loads for 5% of users. Fix being deployed now. Expected resolution in 10 minutes."
```

**Achieve**: Master "Triage-first" mindset (Mitigate > Root-Cause). Learn incident roles (Commander, Scribe, Communications Lead). Practice translating technical issues to business impact.

Soft Skills Practice:
- "Our database is experiencing high replication lag" → Executive version: "Payment processing may be delayed 2-3 minutes. No data loss risk. ETA to resolution: 30 minutes."
- Draft 3 incident update templates: Initial notification, In-progress update, Resolution notice.

15:50 Logic & DSA: 1. Easy: Max Depth of Binary Tree (incident escalation hierarchy).
2. Medium: Binary Tree Level Order Traversal (BFS for incident triage - check high-priority services first).

16:40 Closing Sprint:

Scenario: P1 incident during business hours. You're the Incident Commander. Walk through: PagerDuty escalation, initial assessment, stakeholder notification, mitigation steps, postmortem scheduling.

Career: Portfolio Project #3: Build "Incident Management Platform" - Not just postmortem generator, but full incident lifecycle tool: PagerDuty webhook integration, auto-create Slack channel, postmortem template with severity calculator, action item tracker with Jira integration, timeline builder. Include executive summary auto-generator (translates technical details to business impact). Demonstrate "soft skills + technical skills" combination.

## Day 19: Alerting Strategy & Runbooks

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Practical Monitoring (O'Reilly) - Ch. 3.
- Link: https://learning.oreilly.com/library/view/practical-monitoring/9781491957349/

**Execute** (25 min):

**Multi-window burn rate alert** (Prometheus AlertManager):
```yaml
# prometheus-rules.yaml
groups:
  - name: slo-burn-rate-alerts
    interval: 30s
    rules:
      # Page immediately: burning error budget 14.4x faster than sustainable
      - alert: ErrorBudgetBurnRateCritical
        expr: |
          (
            (1 - (sum(rate(http_requests_total{code!~"5.."}[5m])) / sum(rate(http_requests_total[5m])))) > (14.4 * 0.001)
            and
            (1 - (sum(rate(http_requests_total{code!~"5.."}[1h])) / sum(rate(http_requests_total[1h])))) > (14.4 * 0.001)
          )
          or
          (
            (1 - (sum(rate(http_requests_total{code!~"5.."}[30m])) / sum(rate(http_requests_total[30m])))) > (6 * 0.001)
            and
            (1 - (sum(rate(http_requests_total{code!~"5.."}[6h])) / sum(rate(http_requests_total[6h])))) > (6 * 0.001)
          )
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Critical error budget burn rate"
          description: "Error budget burning too fast. At this rate, monthly budget will be exhausted in <2 days."

      # Ticket alert: slower burn (will exhaust budget in ~1 week)
      - alert: ErrorBudgetBurnRateWarning
        expr: |
          (1 - (sum(rate(http_requests_total{code!~"5.."}[6h])) / sum(rate(http_requests_total[6h])))) > (3 * 0.001)
          and
          (1 - (sum(rate(http_requests_total{code!~"5.."}[3d])) / sum(rate(http_requests_total[3d])))) > (1 * 0.001)
        for: 15m
        labels:
          severity: warning
        annotations:
          summary: "Elevated error rate"
          description: "Error rate elevated but not critical. Review in next business day."
```

**Runbook Template**:
```markdown
# Runbook: High Error Rate (5xx)

## Symptom
- Alert: `ErrorBudgetBurnRateCritical` firing
- Grafana: 5xx rate >0.1%
- Impact: Users seeing errors, error budget burning fast

## Triage (5 min - do this FIRST)
1. Check: Is this affecting all users or specific segment?
   ```bash
   # Query error rate by endpoint
   curl -s "http://prometheus:9090/api/v1/query?query=topk(10,sum by(endpoint)(rate(http_requests_total{code=~\"5..\"}[5m])))" | jq
   ```

2. Check: Recent deployments?
   ```bash
   kubectl rollout history deployment/api
   ```

3. Check: Infrastructure issues (DB, cache, external API)?
   ```bash
   kubectl top pods
   kubectl get pods | grep -v Running
   ```

## Action
- **IF: Recent deployment** → Rollback immediately
  ```bash
  kubectl rollout undo deployment/api
  ```

- **IF: Database overloaded** → Scale read replicas or reduce traffic
  ```bash
  kubectl scale deployment/api --replicas=5  # Reduce load
  ```

- **IF: External API failing** → Enable circuit breaker or use cached data

## Resolution
1. Confirm error rate dropped to <0.05%
2. Update incident timeline
3. Schedule postmortem within 48h

## Prevention
- [ ] Add integration tests covering this scenario
- [ ] Improve monitoring (add canary deployment checks)
- [ ] Document new failure mode
```

**Achieve**: Understand alert fatigue (too many alerts → ignored → incidents missed). Differentiate **symptom alerts** (page: users affected) vs. **cause alerts** (ticket: might cause issue later).

15:50 Logic & DSA: 1. Easy: Symmetric Tree.
2. Medium: Binary Tree Zigzag Level Order Traversal.

16:40 Closing Sprint:

Scenario: Refactoring 200+ noisy alerts down to 15 actionable ones using SLO methodology.

Career: LinkedIn Post: "The Anatomy of a Perfect Runbook (with Template)."

## Day 20: Modern Observability Stack (VictoriaMetrics, Tempo, Pyroscope)

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Efficient Go (O'Reilly) - Profiling & Modern Observability.
- Link: https://learning.oreilly.com/library/view/efficient-go/9781098105709/

**Execute** (25 min):

**Part 1 - VictoriaMetrics** (8 min):
```bash
# 1. Install VictoriaMetrics (single-node)
helm repo add vm https://victoriametrics.github.io/helm-charts/
helm install victoria-metrics vm/victoria-metrics-single

# 2. Configure Prometheus remote_write (migrate existing metrics)
kubectl edit configmap prometheus-config
# Add:
# remote_write:
#   - url: http://victoria-metrics:8428/api/v1/write

# 3. Query VictoriaMetrics (PromQL compatible)
curl 'http://victoria-metrics:8428/api/v1/query?query=up'

# 4. Compare query performance
time curl 'http://prometheus:9090/api/v1/query?query=rate(http_requests_total[5m])'
time curl 'http://victoria-metrics:8428/api/v1/query?query=rate(http_requests_total[5m])'

# 5. Check resource usage
kubectl top pod -l app=victoria-metrics
kubectl top pod -l app=prometheus
```

**Part 2 - Grafana Tempo** (10 min):
```bash
# 1. Install Tempo
helm repo add grafana https://grafana.github.io/helm-charts
helm install tempo grafana/tempo

# 2. Configure OpenTelemetry exporter to send to Tempo
kubectl apply -f - <<EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: otel-collector-config
data:
  config.yaml: |
    receivers:
      otlp:
        protocols:
          grpc:
            endpoint: 0.0.0.0:4317
    exporters:
      tempo:
        endpoint: tempo:4317
        tls:
          insecure: true
    service:
      pipelines:
        traces:
          receivers: [otlp]
          exporters: [tempo]
EOF

# 3. Query traces in Grafana
# Add Tempo data source: http://tempo:3100
# Explore → TraceID → View trace

# 4. Configure trace-to-logs correlation
# In Grafana Tempo data source settings:
# - Derived fields: traceID -> Loki query
```

**Part 3 - Pyroscope** (7 min):
```bash
# 1. Install Pyroscope
helm repo add pyroscope-io https://pyroscope-io.github.io/helm-chart
helm install pyroscope pyroscope-io/pyroscope

# 2. Instrument Go application
# Add to app code:
import "github.com/pyroscope-io/client/pyroscope"

pyroscope.Start(pyroscope.Config{
    ApplicationName: "myapp",
    ServerAddress:   "http://pyroscope:4040",
    ProfileTypes: []pyroscope.ProfileType{
        pyroscope.ProfileCPU,
        pyroscope.ProfileAllocObjects,
        pyroscope.ProfileInuseObjects,
        pyroscope.ProfileInuseSpace,
    },
})

# 3. View flame graphs
# Visit http://pyroscope:4040
# Select: Application → Time Range → Profile Type (CPU, Memory)

# 4. Identify hot paths (CPU bottlenecks)
# Look for wide bars in flame graph = expensive functions
```

**Achieve**: Understand trade-offs: Prometheus vs. VictoriaMetrics (cost: 50% less storage, scale: 10x more metrics, compatibility: PromQL), Jaeger vs. Tempo (backend: object storage vs. Cassandra), commercial vs. open-source (Datadog: $$$, better UX; open-source: free, self-managed).

15:50 Logic & DSA: 1. Easy: Merge Sorted Array (merging time-series from multiple sources).
2. Medium: Sort Colors (categorizing metrics by severity - P0/P1/P2).

16:40 Closing Sprint:

Scenario: Prometheus is OOMing due to high cardinality. Pitch migration to VictoriaMetrics. Calculate cost savings (compute + storage). Use Pyroscope to prove memory leak before prod OOM.

Career: LinkedIn Post: "How We Scaled Observability to 10M metrics/sec with VictoriaMetrics."

## Day 21: Chaos Engineering & Fault Injection

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Chaos Engineering (O'Reilly).
- Link: https://learning.oreilly.com/library/view/chaos-engineering/9781492043850/

**Execute** (25 min):
```bash
# 1. Install Chaos Mesh
curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash

# 2. Inject network delay (200ms) to payment service
kubectl apply -f - <<EOF
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: network-delay
spec:
  action: delay
  mode: one
  selector:
    namespaces:
      - default
    labelSelectors:
      app: payment-service
  delay:
    latency: "200ms"
    correlation: "25"
    jitter: "50ms"
  duration: "5m"
EOF

# 3. Verify circuit breaker triggers
# Monitor metrics during chaos experiment:
kubectl logs -l app=api-gateway -f | grep "circuit breaker"

# Expected: Circuit breaker OPEN after 5 consecutive timeouts

# 4. Inject pod failure (kill random pod)
kubectl apply -f - <<EOF
apiVersion: chaos-mesh.org/v1alpha1
kind: PodChaos
metadata:
  name: pod-failure
spec:
  action: pod-kill
  mode: one
  selector:
    namespaces:
      - default
    labelSelectors:
      app: web
  duration: "30s"
  scheduler:
    cron: "@every 2m"
EOF

# 5. Validate graceful degradation
# Check: Are requests failing or being handled by replicas?
curl -s http://api-gateway/health | jq .

# 6. CPU stress test
kubectl apply -f - <<EOF
apiVersion: chaos-mesh.org/v1alpha1
kind: StressChaos
metadata:
  name: cpu-stress
spec:
  mode: one
  selector:
    namespaces:
      - default
    labelSelectors:
      app: web
  stressors:
    cpu:
      workers: 4
      load: 80
  duration: "3m"
EOF

# 7. Monitor steady state during chaos
# Define steady state: p95 latency < 500ms, error rate < 1%
# If violated, abort experiment
watch -n1 'curl -s "http://prometheus:9090/api/v1/query?query=histogram_quantile(0.95,rate(http_request_duration_seconds_bucket[1m]))" | jq -r ".data.result[0].value[1]"'

# 8. Cleanup
kubectl delete networkchaos network-delay
kubectl delete podchaos pod-failure
kubectl delete stresschaos cpu-stress
```

**Achieve**: Understand **Blast Radius** (limit % of fleet affected), **Steady State Hypothesis** (define "normal" before experiment), **Game Days** (scheduled chaos testing with team observing).

15:50 Logic & DSA: 1. Easy: Pascals Triangle.
2. Medium: Unique Paths (Grid DP).

16:40 Closing Sprint:

Career: Portfolio Project #4: Build "Chaos Engineering Platform" - Beyond dashboard: experiment scheduler, hypothesis validator, blast radius calculator, automated rollback triggers. Integrates with Chaos Mesh/LitmusChaos. Features: pre-flight checks, steady-state validation, automated reports. Include real chaos experiments you ran (documented with screenshots, metrics before/after). Demonstrates production-readiness mindset.

---

# 🌍 WEEK 4: Architecture & Global Reliability

---

## Day 22: Load Balancing Algorithms & Health Checks

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Web Scalability for Startup Engineers (Manning).
- Link: https://www.manning.com/books/web-scalability-for-startup-engineers

**Execute** (25 min):
```yaml
# Envoy configuration with weighted clusters and circuit breaker
# envoy-config.yaml
static_resources:
  listeners:
  - name: listener_0
    address:
      socket_address:
        address: 0.0.0.0
        port_value: 8080
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: backend
              domains: ["*"]
              routes:
              - match:
                  prefix: "/"
                route:
                  weighted_clusters:
                    clusters:
                    - name: backend_v1
                      weight: 80  # 80% traffic
                    - name: backend_v2
                      weight: 20  # 20% traffic (canary)
          http_filters:
          - name: envoy.filters.http.router

  clusters:
  - name: backend_v1
    connect_timeout: 1s
    type: STRICT_DNS
    lb_policy: ROUND_ROBIN  # Round-Robin load balancing
    load_assignment:
      cluster_name: backend_v1
      endpoints:
      - lb_endpoints:
        - endpoint:
            address:
              socket_address:
                address: backend-v1
                port_value: 8080
    # Circuit breaker configuration
    circuit_breakers:
      thresholds:
      - priority: DEFAULT
        max_connections: 100
        max_pending_requests: 100
        max_requests: 100
        max_retries: 3
    outlier_detection:
      consecutive_5xx: 5  # Eject backend after 5 consecutive 5xx errors
      interval: 10s
      base_ejection_time: 30s
      max_ejection_percent: 50
    # Active health checks
    health_checks:
    - timeout: 1s
      interval: 5s
      unhealthy_threshold: 3
      healthy_threshold: 2
      http_health_check:
        path: /health

  - name: backend_v2
    connect_timeout: 1s
    type: STRICT_DNS
    lb_policy: LEAST_REQUEST  # Least-Request load balancing
    load_assignment:
      cluster_name: backend_v2
      endpoints:
      - lb_endpoints:
        - endpoint:
            address:
              socket_address:
                address: backend-v2
                port_value: 8080
```

**Deploy and test**:
```bash
# 1. Deploy Envoy with config
kubectl create configmap envoy-config --from-file=envoy-config.yaml
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: envoy
spec:
  replicas: 1
  selector:
    matchLabels:
      app: envoy
  template:
    metadata:
      labels:
        app: envoy
    spec:
      containers:
      - name: envoy
        image: envoyproxy/envoy:v1.28-latest
        ports:
        - containerPort: 8080
        volumeMounts:
        - name: config
          mountPath: /etc/envoy
      volumes:
      - name: configMap
        configMap:
          name: envoy-config
EOF

# 2. Simulate backend failure (return 500 errors)
kubectl exec backend-v1-pod -- curl -X POST http://localhost/simulate-failure

# 3. Observe circuit breaker in Envoy stats
kubectl exec envoy-pod -- curl -s http://localhost:9901/stats | grep circuit_breakers

# Expected: outlier_detection.ejections_active > 0
```

**Achieve**: Compare **Round-Robin** (equal distribution), **Least-Request** (send to least busy), **Consistent Hash** (sticky sessions). Master **active** (periodic health probe) vs. **passive** (outlier detection based on errors) health checks.

15:50 Logic & DSA: 1. Easy: Single Number.
2. Medium: Find Peak Element.

16:40 Closing Sprint:

Scenario: Debugging why 1% of requests fail: connection pool exhaustion vs. backend overload.

Career: LinkedIn Post: "5 Load Balancer Configs That Saved Us During Black Friday."

## Day 23: Consistent Hashing & Sharding

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Designing Data-Intensive Applications (O'Reilly) - Ch. 5.

**Execute** (25 min):
```python
# consistent_hashing.py
import hashlib
import bisect

class ConsistentHash:
    def __init__(self, nodes=None, virtual_nodes=150):
        """
        nodes: List of server names
        virtual_nodes: Number of virtual nodes per physical node
        """
        self.virtual_nodes = virtual_nodes
        self.ring = {}
        self.sorted_keys = []

        if nodes:
            for node in nodes:
                self.add_node(node)

    def _hash(self, key):
        """MD5 hash function"""
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_node(self, node):
        """Add a node with virtual nodes"""
        for i in range(self.virtual_nodes):
            virtual_key = f"{node}:{i}"
            hash_val = self._hash(virtual_key)
            self.ring[hash_val] = node
            bisect.insort(self.sorted_keys, hash_val)
        print(f"Added {node} with {self.virtual_nodes} virtual nodes")

    def remove_node(self, node):
        """Remove a node and its virtual nodes"""
        for i in range(self.virtual_nodes):
            virtual_key = f"{node}:{i}"
            hash_val = self._hash(virtual_key)
            del self.ring[hash_val]
            self.sorted_keys.remove(hash_val)
        print(f"Removed {node}")

    def get_node(self, key):
        """Get the node responsible for this key"""
        if not self.ring:
            return None

        hash_val = self._hash(key)
        # Find the first node clockwise on the ring
        index = bisect.bisect_right(self.sorted_keys, hash_val)
        if index == len(self.sorted_keys):
            index = 0

        return self.ring[self.sorted_keys[index]]

# Test: Calculate key migration when adding/removing nodes
def calculate_migration(old_hash, new_hash, num_keys=10000):
    """Calculate % of keys that migrate"""
    migrations = 0
    for i in range(num_keys):
        key = f"user_{i}"
        old_node = old_hash.get_node(key)
        new_node = new_hash.get_node(key)
        if old_node != new_node:
            migrations += 1
    return (migrations / num_keys) * 100

# Compare: Consistent Hashing vs Modulo Sharding
def modulo_shard(key, num_nodes):
    """Traditional modulo sharding: key % N"""
    return hash(key) % num_nodes

# Scenario: 3 nodes → 4 nodes
print("=== Consistent Hashing ===")
ch_old = ConsistentHash(['node1', 'node2', 'node3'])
ch_new = ConsistentHash(['node1', 'node2', 'node3', 'node4'])
migration_ch = calculate_migration(ch_old, ch_new)
print(f"Keys migrated: {migration_ch:.2f}%")  # Expected: ~25% (1/4)

print("\n=== Modulo Sharding ===")
migrations_modulo = 0
for i in range(10000):
    key = f"user_{i}"
    old_node = modulo_shard(key, 3)
    new_node = modulo_shard(key, 4)
    if old_node != new_node:
        migrations_modulo += 1
migration_modulo = (migrations_modulo / 10000) * 100
print(f"Keys migrated: {migration_modulo:.2f}%")  # Expected: ~75% (all keys rehash!)
```

**Run the test**:
```bash
python3 consistent_hashing.py
```

**Achieve**: Understand Consistent Hashing as the backbone of CDNs (Akamai, Cloudflare), Load Balancers (Envoy, HAProxy), and distributed caches (Redis Cluster, Memcached). **Key insight**: Adding 1 node out of N only migrates ~1/N keys, vs. modulo sharding which migrates ~(N-1)/N keys.

15:50 Logic & DSA: 1. Easy: Path Sum.
2. Medium: Subarray Sum Equals K (Prefix sum logic).

16:40 Closing Sprint:

Scenario: "Hot Key" shard issues: Pitching a "Virtual Node" solution.

## Day 24: Cache Stampede & Mitigation

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Caching Strategies & Distributed Systems

**Choose one** (all free):
1. **System Design Interview - Caching** (YouTube - Gaurav Sen): https://www.youtube.com/watch?v=DUbEgNw-F3c (12 min, excellent)
2. **Redis University - Caching Strategies** (Free course): https://university.redis.com/courses/ru101/ (full course, focus on Module 3)
3. **AWS Caching Best Practices** (Official): https://aws.amazon.com/caching/best-practices/ (article, 15 min read)

**Alternative paid**:
- O'Reilly: "Web Scalability for Startup Engineers" by Artur Ejsmont (Chapter on Caching)
- Udemy: "System Design Interview Guide" by Frank Kane

**Execute** (25 min):
```python
# cache_stampede_mitigation.py
import time
import random
import threading
import redis

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

def expensive_query():
    """Simulate expensive database query"""
    time.sleep(2)  # 2 second query
    return f"Result at {time.time()}"

# ❌ BAD: Cache-Aside without stampede protection
def get_data_naive(key):
    value = r.get(key)
    if value is None:
        # Cache miss: query database
        print(f"[{threading.current_thread().name}] Cache MISS - querying DB")
        value = expensive_query()
        r.setex(key, 60, value)  # Cache for 60 seconds
    else:
        print(f"[{threading.current_thread().name}] Cache HIT")
    return value

# ✅ GOOD: Probabilistic Early Recomputation
def get_data_optimized(key, ttl=60, delta=10):
    """
    delta: Early recomputation window (seconds)
    If TTL is close to expiring, probabilistically refresh early
    """
    value = r.get(key)
    ttl_remaining = r.ttl(key)

    if value is None:
        # Cache miss
        print(f"[{threading.current_thread().name}] Cache MISS - querying DB")
        value = expensive_query()
        r.setex(key, ttl, value)
    elif ttl_remaining < delta:
        # Early recomputation probability: higher as TTL approaches 0
        xfetch = delta * random.random()
        if ttl_remaining < xfetch:
            print(f"[{threading.current_thread().name}] Early refresh (TTL={ttl_remaining}s)")
            value = expensive_query()
            r.setex(key, ttl, value)
        else:
            print(f"[{threading.current_thread().name}] Cache HIT (TTL={ttl_remaining}s)")
    else:
        print(f"[{threading.current_thread().name}] Cache HIT (TTL={ttl_remaining}s)")

    return value

# Simulate cache stampede: 10 threads hit expired key simultaneously
def simulate_stampede():
    key = "popular_product"
    r.delete(key)  # Force cache miss

    threads = []
    for i in range(10):
        t = threading.Thread(target=get_data_naive, args=(key,), name=f"Thread-{i}")
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

print("=== Simulating Cache Stampede ===")
simulate_stampede()
# Expected: All 10 threads query DB (10x 2-second queries = 20 seconds wasted!)

time.sleep(3)

print("\n=== With Probabilistic Early Recomputation ===")
# Set initial cache value
r.setex("popular_product", 5, "initial_value")
time.sleep(4)  # Wait until TTL is low

threads = []
for i in range(10):
    t = threading.Thread(target=get_data_optimized, args=("popular_product",), name=f"Thread-{i}")
    threads.append(t)
    t.start()

for t in threads:
    t.join()
# Expected: Only 1-2 threads refresh, others use cached value
```

**Load test to trigger stampede**:
```bash
# Install Redis
docker run -d -p 6379:6379 redis:7-alpine

# Install Python dependencies
pip install redis

# Run simulation
python3 cache_stampede_mitigation.py

# Load test with wrk (trigger stampede)
wrk -t10 -c100 -d30s http://localhost:8080/popular-item
```

**Achieve**: Explain caching patterns:
- **Cache-Aside**: App checks cache, queries DB on miss (risk: stampede)
- **Write-Through**: Write to cache + DB synchronously (slower writes, always fresh)
- **Write-Back**: Write to cache, async write to DB (fast writes, risk of data loss)

15:50 Logic & DSA: 1. Easy: Lowest Common Ancestor of a BST.
2. Medium: Design Twitter (Combining OOD and DSA).

16:40 Closing Sprint:

Career: Enhancement to Project #3: Add caching strategy simulator to your Incident Management Platform showing cache stampede scenarios.

## Day 25: Database Replication & Failover

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Designing Data-Intensive Applications (O'Reilly) - Ch. 5.
- Link: https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/

**Execute** (25 min):
```bash
# 1. Set up PostgreSQL primary-replica replication
# Primary setup
docker run -d --name postgres-primary \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_USER=admin \
  -p 5432:5432 \
  postgres:16

# Create replication user on primary
docker exec -it postgres-primary psql -U admin -c \
  "CREATE ROLE replicator WITH REPLICATION LOGIN PASSWORD 'repl_pass';"

# Configure primary for replication
docker exec -it postgres-primary bash -c \
  "echo \"host replication replicator 0.0.0.0/0 md5\" >> /var/lib/postgresql/data/pg_hba.conf"

docker restart postgres-primary

# 2. Set up replica with streaming replication
docker run -d --name postgres-replica \
  -e PGPASSWORD=repl_pass \
  postgres:16 \
  bash -c "rm -rf /var/lib/postgresql/data/* && \
           pg_basebackup -h postgres-primary -U replicator -D /var/lib/postgresql/data -P -R && \
           postgres"

# 3. Verify replication status
docker exec postgres-primary psql -U admin -c \
  "SELECT client_addr, state, sync_state FROM pg_stat_replication;"

# Expected output:
# client_addr | state     | sync_state
# 172.17.0.3  | streaming | async

# 4. Test replication lag
docker exec postgres-primary psql -U admin -c \
  "SELECT pg_current_wal_lsn();"  # Primary LSN

docker exec postgres-replica psql -U admin -c \
  "SELECT pg_last_wal_replay_lsn();"  # Replica LSN

# Calculate lag in bytes
docker exec postgres-primary psql -U admin -c \
  "SELECT client_addr,
          pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes
   FROM pg_stat_replication;"

# 5. Simulate primary failure and promotion
docker stop postgres-primary

# Promote replica to primary
docker exec postgres-replica pg_ctl promote -D /var/lib/postgresql/data

# Measure RTO (Recovery Time Objective)
start_time=$(date +%s)
# Wait for promotion
sleep 5
end_time=$(date +%s)
rto=$((end_time - start_time))
echo "RTO: ${rto} seconds"

# 6. Measure RPO (Recovery Point Objective)
# RPO = Data loss during failover = Replication lag at time of failure
# In async replication: RPO can be several seconds
# In sync replication: RPO = 0 (no data loss)
```

**Switch to synchronous replication (zero RPO)**:
```sql
-- On primary, require synchronous commit
ALTER SYSTEM SET synchronous_commit = 'on';
ALTER SYSTEM SET synchronous_standby_names = 'postgres-replica';
SELECT pg_reload_conf();

-- Trade-off:
-- - RPO = 0 (no data loss)
-- - Slower writes (wait for replica ACK)
-- - If replica down, writes block!
```

**Achieve**: Master **synchronous** (zero RPO, slower writes, blocks if replica down) vs. **asynchronous** (fast writes, data loss risk, non-blocking) replication trade-offs. Understand **split-brain** (two primaries accepting writes → data divergence).

15:50 Logic & DSA: 1. Easy: Happy Number.
2. Medium: Word Break (DP with memoization).

16:40 Closing Sprint:

Scenario: Investigating replica lag during peak traffic: network saturation vs. write amplification.

Career: LinkedIn Post: "How We Achieved <5 Second RTO with Automated Postgres Failover."

## Day 26: CDN Architecture & Edge Computing

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Edge Computing in Practice (O'Reilly).
- Link: https://learning.oreilly.com/library/view/learning-modern-linux/9781098108939/

**Execute** (25 min):
```javascript
// Cloudflare Worker - Request coalescing at edge
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// Cache API for request coalescing
const pendingRequests = new Map()

async function handleRequest(request) {
  const cacheKey = new URL(request.url)

  // Check if request is already in-flight (request coalescing)
  if (pendingRequests.has(cacheKey.href)) {
    console.log('Request coalescing - waiting for in-flight request')
    return pendingRequests.get(cacheKey.href)
  }

  // Check cache first
  const cache = caches.default
  let response = await cache.match(request)

  if (response) {
    console.log('Cache HIT')
    return response
  }

  // Cache MISS - fetch from origin (with coalescing)
  console.log('Cache MISS - fetching from origin')
  const fetchPromise = fetch(request).then(async (response) => {
    // Clone response for caching
    const responseToCache = response.clone()

    // Cache for 1 hour
    const headers = new Headers(responseToCache.headers)
    headers.set('Cache-Control', 'public, max-age=3600')

    const cachedResponse = new Response(responseToCache.body, {
      status: responseToCache.status,
      statusText: responseToCache.statusText,
      headers: headers
    })

    event.waitUntil(cache.put(request, cachedResponse))
    pendingRequests.delete(cacheKey.href)

    return response
  })

  // Store in-flight request for coalescing
  pendingRequests.set(cacheKey.href, fetchPromise)

  return fetchPromise
}
```

**Deploy Worker**:
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create worker project
wrangler init my-worker

# Deploy
wrangler publish
```

**Monitor cache HIT ratio**:
```bash
# Cloudflare Analytics API
curl -X GET "https://api.cloudflare.com/client/v4/zones/{zone_id}/analytics/dashboard" \
  -H "Authorization: Bearer {api_token}" | jq .result.totals.requests.cached_percentage
```

**Achieve**: Understand **PoP placement** (place servers geographically near users), **Anycast routing** (same IP announced from multiple locations, BGP routes to nearest), **TLS termination at edge** (decrypt at edge, faster for users).

15:50 Logic & DSA: 1. Easy: Isomorphic Strings.
2. Medium: LRU Cache (Implement doubly-linked list + HashMap).

16:40 Closing Sprint:

Scenario: Proving that 200ms latency is CDN cache miss (origin fetch) vs. actual origin slowness.

## Day 27: Rate Limiting & API Gateway Patterns

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Building Microservices, 2nd Ed (O'Reilly) - Ch. 11.
- Link: https://learning.oreilly.com/library/view/building-microservices-2nd/9781492034018/

**Execute** (25 min):
```lua
-- Token Bucket Rate Limiter in Redis (Lua script for atomicity)
-- token_bucket.lua
local key = KEYS[1]  -- e.g., "rate_limit:user:123"
local capacity = tonumber(ARGV[1])  -- max tokens (e.g., 100)
local refill_rate = tonumber(ARGV[2])  -- tokens per second (e.g., 10)
local tokens_requested = tonumber(ARGV[3])  -- tokens for this request (usually 1)
local now = tonumber(ARGV[4])  -- current timestamp

-- Get current tokens and last refill time
local tokens = tonumber(redis.call('HGET', key, 'tokens'))
local last_refill = tonumber(redis.call('HGET', key, 'last_refill'))

if tokens == nil then
  -- Initialize bucket
  tokens = capacity
  last_refill = now
end

-- Refill tokens based on time elapsed
local elapsed = now - last_refill
local tokens_to_add = elapsed * refill_rate
tokens = math.min(capacity, tokens + tokens_to_add)

-- Check if enough tokens available
if tokens >= tokens_requested then
  -- Allow request
  tokens = tokens - tokens_requested
  redis.call('HSET', key, 'tokens', tokens)
  redis.call('HSET', key, 'last_refill', now)
  redis.call('EXPIRE', key, 3600)  -- Expire key after 1 hour
  return 1  -- Request allowed
else
  -- Rate limited
  return 0  -- Request denied
end
```

**Python client**:
```python
import redis
import time

r = redis.Redis(host='localhost', port=6379)

# Load Lua script
with open('token_bucket.lua') as f:
    token_bucket_script = r.register_script(f.read())

def rate_limit(user_id, capacity=100, refill_rate=10, tokens_requested=1):
    """
    capacity: Max tokens in bucket
    refill_rate: Tokens added per second
    tokens_requested: Tokens needed for this request
    """
    key = f"rate_limit:user:{user_id}"
    now = time.time()

    allowed = token_bucket_script(
        keys=[key],
        args=[capacity, refill_rate, tokens_requested, now]
    )

    if allowed:
        return True, "Request allowed"
    else:
        return False, "Rate limit exceeded (429 Too Many Requests)"

# Test
for i in range(150):
    allowed, msg = rate_limit(user_id="123", capacity=100, refill_rate=10)
    if not allowed:
        print(f"Request {i+1}: {msg}")
        break
    time.sleep(0.05)  # 50ms between requests
```

**Compare algorithms**:
```python
# Fixed Window (simple but inaccurate)
# Problem: 200 requests at end of minute 1 + 200 at start of minute 2 = 400 in 1 second!

# Sliding Window Log (accurate but expensive)
# Store timestamp of each request, count requests in last N seconds

# Token Bucket (good balance)
# Smooth bursts, accurate, efficient
```

**Achieve**: Master **distributed rate limiting** (use Redis for shared state across API servers). Understand **429 response strategies** (return Retry-After header, exponential backoff).

15:50 Logic & DSA: 1. Easy: Majority Element.
2. Medium: Container With Most Water.

16:40 Closing Sprint:

Scenario: Defending API quotas during DDoS vs. legitimate traffic spike (Olympics, Black Friday).

Career: LinkedIn Post: "Rate Limiting Algorithms Compared: Token Bucket vs. Leaky Bucket vs. Sliding Window."

## Day 28: Multi-Region Deployments & Global Traffic Management

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): Cloud Native Infrastructure (O'Reilly) - Ch. 8.
- Link: https://learning.oreilly.com/library/view/cloud-native-infrastructure/9781491984291/

**Execute** (25 min):
```bash
# 1. Configure AWS Route53 GeoDNS with health checks
aws route53 create-health-check \
  --health-check-config \
  IPAddress=52.1.1.1,Port=443,Type=HTTPS,ResourcePath=/health,FullyQualifiedDomainName=us-east-api.example.com

# 2. Create geo-routing policy
aws route53 change-resource-record-sets \
  --hosted-zone-id Z123456 \
  --change-batch '{
    "Changes": [{
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "api.example.com",
        "Type": "A",
        "SetIdentifier": "US-East-1",
        "GeoLocation": {
          "ContinentCode": "NA"
        },
        "TTL": 60,
        "ResourceRecords": [{"Value": "52.1.1.1"}],
        "HealthCheckId": "abc123"
      }
    }, {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "api.example.com",
        "Type": "A",
        "SetIdentifier": "EU-West-1",
        "GeoLocation": {
          "ContinentCode": "EU"
        },
        "TTL": 60,
        "ResourceRecords": [{"Value": "34.2.2.2"}],
        "HealthCheckId": "def456"
      }
    }]
  }'

# 3. Simulate region failure
# Stop US-East-1 health check endpoint
aws ec2 stop-instances --instance-ids i-12345

# Wait for Route53 to detect failure (typically 30-60 seconds)
watch -n5 'dig api.example.com +short'

# Expected: Traffic fails over to EU-West-1

# 4. Measure cross-region latency
# From different regions:
for region in us-east-1 eu-west-1 ap-southeast-1; do
  echo "Testing from $region"
  aws ec2 run-instances \
    --region $region \
    --image-id ami-xyz \
    --instance-type t3.micro \
    --user-data '#!/bin/bash
curl -w "@curl-timing.txt" -o /dev/null -s https://api.example.com
'
done
```

**Active-Active vs Active-Passive**:
```yaml
# Active-Active (both regions serve traffic)
Pros:
  - Better resource utilization
  - Load distributed
  - Faster failover (no cold start)
Cons:
  - Complex data sync (eventual consistency)
  - Higher cost (2x infrastructure)
  - Potential split-brain

# Active-Passive (primary + standby)
Pros:
  - Simpler data consistency
  - Lower cost
  - Easier to manage
Cons:
  - Wasted standby capacity
  - Slower failover (cold start)
  - Risk of standby drift
```

**Data sovereignty compliance**:
```python
# GDPR requires EU data to stay in EU
# Implementation:
def route_user_data(user_location, data):
    if user_location in ['DE', 'FR', 'IT', 'ES']:
        # EU users → EU region
        return store_in_region('eu-west-1', data)
    elif user_location == 'US':
        return store_in_region('us-east-1', data)
    else:
        return store_in_region('default', data)
```

**Achieve**: Understand **Active-Active** (both regions active, complex sync) vs. **Active-Passive** (standby, simpler, slower failover). Master **data sovereignty** (GDPR: EU data must stay in EU, not cross borders).

15:50 Logic & DSA: 1. Easy: Power of Two.
2. Medium: 3Sum (Two-pointer technique).

16:40 Closing Sprint:

Scenario: Deciding between Global Load Balancer vs. Regional Isolation for GDPR compliance.

Career: Portfolio Project #5 (Capstone): Build "SRE Platform Toolkit" - Your comprehensive portfolio site showcasing all 4 previous projects PLUS: Infrastructure-as-Code for entire deployment (Terraform for AWS/K8s), unified observability (Prometheus/Grafana/Loki), cost tracking, security scanning, uptime monitoring. This is your "full SRE platform" demonstration. Include architecture diagram, cost breakdown, SLO dashboard, incident history. Make this your GitHub profile README showcase.

## Day 29: FinOps & Cloud Cost Optimization at Scale

[⬆️ Back to Top](#-quick-navigation)

**15:00 Technical Drill (40 min):**

**Watch** (15 min): The Art of Capacity Planning + Cloud FinOps (O'Reilly).
- Link: https://learning.oreilly.com/library/view/cloud-finops/9781492054610/

**Execute** (25 min):

**1. Build capacity model**:
```python
# capacity_planning.py
def forecast_capacity(current_rps, growth_rate_monthly, months=6, target_utilization=0.7):
    """
    current_rps: Current requests per second
    growth_rate_monthly: Monthly growth rate (e.g., 0.10 for 10%)
    target_utilization: Target CPU/memory utilization (0.7 = 70%)
    """
    forecasts = []

    for month in range(1, months + 1):
        # Calculate future RPS
        future_rps = current_rps * ((1 + growth_rate_monthly) ** month)

        # Current capacity at target utilization
        current_capacity_rps = current_rps / target_utilization

        # Required capacity
        required_capacity_rps = future_rps / target_utilization

        # Additional instances needed (assume 100 RPS per instance)
        rps_per_instance = 100
        current_instances = current_capacity_rps / rps_per_instance
        required_instances = required_capacity_rps / rps_per_instance
        additional_instances = required_instances - current_instances

        forecasts.append({
            'month': month,
            'rps': future_rps,
            'instances_needed': int(required_instances),
            'additional_instances': int(additional_instances)
        })

    return forecasts

# Example
forecasts = forecast_capacity(
    current_rps=500,
    growth_rate_monthly=0.10,  # 10% growth/month
    months=6,
    target_utilization=0.7
)

for f in forecasts:
    print(f"Month {f['month']}: {f['rps']:.0f} RPS, need {f['instances_needed']} instances (+{f['additional_instances']})")
```

**2. Identify idle resources**:
```bash
# Find idle EC2 instances (CPU < 5% for 7 days)
aws cloudwatch get-metric-statistics \
  --namespace AWS/EC2 \
  --metric-name CPUUtilization \
  --dimensions Name=InstanceId,Value=i-12345 \
  --start-time $(date -u -d '7 days ago' +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 86400 \
  --statistics Average \
  --query 'Datapoints[?Average<5.0]'

# Find unattached EBS volumes
aws ec2 describe-volumes \
  --filters Name=status,Values=available \
  --query 'Volumes[*].[VolumeId,Size,VolumeType]'

# Find old snapshots (> 30 days)
aws ec2 describe-snapshots --owner-ids self \
  --query 'Snapshots[?StartTime<`2024-01-01`].[SnapshotId,StartTime,VolumeSize]'

# Kubernetes idle resources (using Kubecost)
kubectl port-forward -n kubecost svc/kubecost-cost-analyzer 9090:9090
curl http://localhost:9090/model/allocation \
  | jq '.data[] | select(.efficiency < 0.5)'  # <50% utilization
```

**3. Rightsizing recommendations**:
```bash
# Get EC2 rightsizing recommendations
aws ce get-rightsizing-recommendation \
  --service AmazonEC2 \
  --configuration '{"RecommendationTarget":"SAME_INSTANCE_FAMILY","BenefitsConsidered":true}' \
  | jq '.RightsizingRecommendations[] | {
      InstanceId: .CurrentInstance.ResourceId,
      CurrentType: .CurrentInstance.InstanceName,
      RecommendedType: .ModifyRecommendationDetail.TargetInstances[0].InstanceName,
      MonthlySavings: .ModifyRecommendationDetail.TargetInstances[0].EstimatedMonthlySavings
    }'
```

**4. TCO Calculation** (Reserved vs Spot vs On-Demand):
```python
# tco_calculator.py
def calculate_tco(hours_per_month=730, on_demand_rate=0.10):
    """
    on_demand_rate: $ per hour (e.g., $0.10 for t3.medium)
    """
    # On-Demand
    od_cost = hours_per_month * on_demand_rate

    # Spot (70% discount, but 10% interruption rate)
    spot_rate = on_demand_rate * 0.30  # 70% discount
    spot_cost = hours_per_month * spot_rate * 1.10  # +10% for interruption overhead

    # 1-Year Reserved Instance (40% discount)
    ri_1y_upfront = on_demand_rate * hours_per_month * 12 * 0.60  # 40% discount
    ri_1y_monthly = ri_1y_upfront / 12

    # 3-Year Reserved Instance (60% discount)
    ri_3y_upfront = on_demand_rate * hours_per_month * 36 * 0.40  # 60% discount
    ri_3y_monthly = ri_3y_upfront / 36

    # Savings Plan (similar to RI, flexible)
    sp_cost = hours_per_month * on_demand_rate * 0.65  # 35% discount

    return {
        'On-Demand': od_cost,
        'Spot': spot_cost,
        'RI-1Y': ri_1y_monthly,
        'RI-3Y': ri_3y_monthly,
        'Savings Plan': sp_cost
    }

costs = calculate_tco(hours_per_month=730, on_demand_rate=0.10)
for option, cost in costs.items():
    print(f"{option}: ${cost:.2f}/month")

# Output:
# On-Demand: $73.00/month
# Spot: $24.09/month (70% savings)
# RI-1Y: $43.80/month (40% savings)
# RI-3Y: $29.20/month (60% savings)
# Savings Plan: $47.45/month (35% savings)
```

**Achieve**: Master **FinOps principles** (unit economics: cost per transaction, showback/chargeback: allocate costs to teams, tagging strategy: env=prod, team=payments). Understand **cloud waste**: idle (no usage), over-provisioning (unused capacity), zombies (unattached volumes), snapshots (old backups). Learn **commitment strategies**: 1-year RI (40% discount, moderate risk), 3-year RI (60% discount, high risk), Spot (70% discount, interruptions).

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

**Day 8: etcd Distributed State Machine**
```
Day 8: Understanding etcd for Kubernetes

Topics:
- etcd architecture and Raft consensus
- Quorum and leader election
- etcdctl commands for monitoring
- Watching K8s state changes in real-time
- Performance tuning (etcd_disk_wal_fsync_duration_seconds)

Provide:
1. Conceptual overview: How K8s uses etcd for state management
2. etcdctl commands: watch, get, performance metrics
3. Debugging scenario: etcd showing high disk latency - how to prove disk is bottleneck
4. Interview question: "Explain what happens when etcd loses quorum"
5. Convergence demo: Delete an etcd key and watch K8s recreate it

Context: K8s SRE role, need deep understanding of control plane.
```

**Day 9: CNI & Overlay Networking**
```
Day 9: Kubernetes networking internals

Topics:
- CNI (Container Network Interface) plugins
- Overlay networking (VXLAN) vs Underlay (BGP)
- Pod-to-pod communication across nodes
- iptables MASQUERADE rules
- Network debugging (nsenter, tcpdump at pod level)

Provide:
1. Packet flow diagram: Pod A (node 1) → Pod B (node 2)
2. Commands: nsenter to enter pod network namespace, tcpdump
3. Calico vs Flannel vs Cilium comparison
4. Debugging scenario: Inter-pod timeouts - MTU mismatch investigation
5. Interview question: "How does kube-proxy implement ClusterIP services?"

Make examples focused on production debugging.
```

**Day 10: Persistent Data & CSI**
```
Day 10: Kubernetes storage with CSI

Topics:
- CSI (Container Storage Interface) lifecycle
- PVC (PersistentVolumeClaim) and PV binding
- StorageClass and dynamic provisioning
- RWO vs RWX vs ROX access modes
- StatefulSet volume management

Provide:
1. CSI workflow: Create → Attach → Mount → Delete
2. Commands to simulate node failure and PVC re-attachment
3. When to use RWO vs RWX (with real examples)
4. Debugging scenario: Pod stuck in ContainerCreating - PVC mount issue
5. Interview question: "Design storage for a database StatefulSet"

Context: Running stateful workloads on K8s (databases, Kafka).
```

**Day 11: Terraform Fundamentals**
```
Day 11: Infrastructure as Code with Terraform

Topics:
- Declarative IaC principles
- Terraform state management (local vs remote)
- S3 backend with DynamoDB locking
- Modules and code reusability
- terraform import for existing infrastructure

Provide:
1. Complete example: VPC + EC2 + RDS with Terraform
2. Remote state configuration (S3 + DynamoDB)
3. Module structure for reusable VPC
4. Debugging scenario: "Resource already exists" error - how to import
5. Interview question: "Compare Terraform vs CloudFormation vs Pulumi"

Context: AWS infrastructure, need production-grade IaC skills.
```

**Day 12: Kubernetes Security & RBAC**
```
Day 12: K8s security, RBAC, and secrets management

Topics:
- RBAC: ClusterRole, RoleBinding, ServiceAccount
- kubectl auth can-i for testing permissions
- OIDC authentication with external identity providers
- External Secrets Operator (sync from Vault/AWS Secrets Manager)
- Pod Security Standards (restricted/baseline/privileged)

Provide:
1. Create least-privilege RBAC for CI/CD pipeline
2. OIDC token flow for kubectl authentication
3. External Secrets Operator setup (AWS Secrets Manager example)
4. Debugging scenario: Unexpected pod escalations - audit logs investigation
5. Interview question: "Design zero-trust authentication for K8s"

Context: Security-focused SRE role, need compliance knowledge.
```

**Day 13: StatefulSets & GitOps**
```
Day 13: StatefulSets and GitOps with ArgoCD

Topics:
- StatefulSet ordinal index and stable network identity
- Headless services for pod discovery
- PVC retention and management
- ArgoCD installation and configuration
- GitOps workflow: Git commit → ArgoCD sync → deployment
- Sync waves and health checks

Provide:
1. Deploy Kafka StatefulSet with headless service
2. nslookup commands to verify stable DNS (pod-0.svc.ns.svc.cluster.local)
3. ArgoCD app-of-apps pattern
4. Debugging scenario: Cassandra split-brain during rolling restart
5. Interview question: "Compare kubectl apply vs GitOps for production"

Context: Running stateful distributed systems on K8s.
```

**Day 14: CI/CD Pipelines & DevSecOps**
```
Day 14: Production CI/CD with security scanning

Topics:
- CI/CD pipeline stages (lint → test → build → scan → deploy)
- Security scanning: Trivy (containers), Snyk (dependencies), gitleaks (secrets)
- SBOM (Software Bill of Materials) generation
- GitHub Actions with OIDC (no long-lived secrets)
- Branch protection and required checks
- ArgoCD deployment with automated rollback

Provide:
1. Complete GitHub Actions workflow (all stages)
2. Trivy scan integration with failure threshold
3. OIDC authentication setup (GitHub → AWS)
4. Debugging scenario: Pipeline fails on CVE - how to fix and re-deploy
5. Calculate DORA metrics: deployment frequency, lead time, MTTR

Context: Building production-grade CI/CD for microservices.
```

---

### 🤖 Week 3 Prompts: Observability, Security & Incidents

**Day 15: PromQL & High-Cardinality**
```
Day 15: Prometheus query language and cardinality management

Topics:
- PromQL basics: rate(), histogram_quantile(), aggregations
- Four Golden Signals (latency, traffic, errors, saturation)
- High cardinality problem (UUID in labels)
- Memory impact of cardinality
- Label optimization strategies

Provide:
1. PromQL queries for SLO calculation (99.9% availability)
2. histogram_quantile for p95, p99 latency
3. Identify cardinality explosion using /tsdb-status
4. Debugging scenario: Grafana dashboard slow to load - heavy queries
5. Interview question: "Why does high cardinality kill Prometheus?"

Context: Running Prometheus at scale (1M+ time series).
```

**Day 16: SLOs, SLIs & Error Budgets**
```
Day 16: Service Level Objectives and error budgets

Topics:
- SLI (Service Level Indicator) definition
- SLO (Service Level Objective) targets
- SLA (Service Level Agreement) vs SLO
- Error budget calculation from SLO
- Burn rate alerts (multi-window)

Provide:
1. Calculate error budget: 99.9% SLO → 43.2 min downtime/month
2. Request-based vs window-based SLIs (pros/cons)
3. Burn rate alert: (5m burn > 14.4x AND 1h burn > 14.4x)
4. Real scenario: Should we deploy? Error budget at 80%
5. Interview question: "Design SLO for a payment processing service"

Context: SRE implementing Google-style SLO/error budget practice.
```

**Day 17: Container Security**
```
Day 17: Container security with OPA and Falco

Topics:
- Container security layers (image, runtime, network)
- Trivy/Grype for CVE scanning
- OPA Gatekeeper for admission policies
- Falco for runtime security detection
- Pod Security Standards enforcement

Provide:
1. Write OPA policy: Block privileged pods, enforce resource limits
2. Falco rule: Detect unexpected file access in containers
3. Trivy scan integration in CI/CD
4. Debugging scenario: Falco alert - pod accessing /etc/shadow
5. Interview question: "Design defense-in-depth for K8s security"

Context: Security-focused SRE, need to prevent container breakouts.
```

**Day 18: Incident Management & Communication**
```
Day 18: Leading incidents and stakeholder communication

Topics:
- Incident roles (Commander, Scribe, Communications Lead)
- Triage-first mindset (Mitigate > Root cause)
- Executive status updates (technical → business impact)
- Customer-facing notifications
- Blameless postmortem structure

Provide:
1. Translate technical to business impact examples
2. Executive update template (1-2 sentences)
3. Incident timeline best practices
4. Role-play scenario: You're IC for database outage
5. STAR answer: "Tell me about your worst production incident"

Context: Senior SRE expected to lead P0 incidents.
```

**Day 19: Alerting Strategy & Runbooks**
```
Day 19: Designing actionable alerts and runbooks

Topics:
- Alert fatigue causes and solutions
- Symptom vs cause alerts
- Multi-window burn rate alerts
- Runbook structure (STAR: Symptom, Triage, Action, Resolution)
- Alert routing and escalation

Provide:
1. Refactor noisy alerts using SLO methodology
2. Runbook template with real example
3. Multi-window burn rate alert design
4. Debugging scenario: 200 alerts firing, which to investigate first?
5. Interview question: "How do you reduce alert fatigue?"

Context: On-call engineer drowning in alerts.
```

**Day 20: Modern Observability Stack**
```
Day 20: VictoriaMetrics, Tempo, Pyroscope

Topics:
- VictoriaMetrics vs Prometheus (scale, cost, compatibility)
- Grafana Tempo for distributed tracing (vs Jaeger)
- Pyroscope for continuous profiling (CPU, heap flame graphs)
- Trace-to-logs correlation
- Commercial vs open-source observability

Provide:
1. Deploy VictoriaMetrics, compare query performance vs Prometheus
2. Tempo setup with OTel instrumentation
3. Pyroscope CPU/heap profiling - identify hot paths
4. Scenario: Prometheus OOMing - migration path to VictoriaMetrics
5. Interview question: "Design observability for 10M metrics/sec"

Context: Scaling observability beyond Prometheus limits.
```

**Day 21: Chaos Engineering**
```
Day 21: Chaos engineering and fault injection

Topics:
- Chaos engineering principles (blast radius, steady state)
- Chaos Mesh / LitmusChaos experiments
- Fault types (pod kill, network delay, CPU stress)
- Hypothesis validation
- Automated rollback triggers

Provide:
1. Design chaos experiment: Network delay to payment service
2. Steady-state validation with Prometheus queries
3. Blast radius controls (max 20% pods)
4. Scenario: Experiment causes SLO violation - auto-rollback
5. Interview question: "Convince leadership to allow chaos testing in prod"

Context: Building resilient systems, need chaos testing approval.
```

---

### 🤖 Week 4 Prompts: Architecture & Global Reliability

**Day 22: Load Balancing**
```
Day 22: Load balancing algorithms and health checks

Topics:
- Load balancing algorithms (Round-Robin, Least-Request, Consistent Hash)
- Active vs passive health checks
- Circuit breaker pattern (consecutive_5xx)
- Connection pool exhaustion
- Envoy proxy configuration

Provide:
1. Configure Envoy with weighted clusters
2. When to use each algorithm (with examples)
3. Circuit breaker tuning
4. Debugging scenario: 1% requests fail - one bad pod vs network issue
5. Interview question: "Design load balancing for 10K RPS"

Context: Microservices with service mesh.
```

**Day 23: Consistent Hashing**
```
Day 23: Consistent hashing and sharding strategies

Topics:
- Consistent hashing algorithm
- Virtual nodes for load distribution
- Comparison: Consistent hashing vs modulo sharding
- Hot key problem
- Rebalancing during node addition/removal

Provide:
1. Implement consistent hashing in Python
2. Calculate % of keys migrated when adding node
3. Virtual node strategy for hot key mitigation
4. Scenario: One shard is hot - pitching virtual node solution
5. Interview question: "Design sharding for 1B users"

Context: Distributed caching (Redis, Memcached).
```

**Day 24: Cache Stampede**
```
Day 24: Cache stampede mitigation

Topics:
- Cache stampede / thundering herd problem
- Mitigation: Probabilistic early recomputation, request coalescing
- Cache-Aside vs Write-Through vs Write-Back
- TTL strategies
- Cache warming

Provide:
1. Reproduce cache stampede with load test
2. Implement probabilistic early recomputation
3. Compare cache patterns with pros/cons
4. Scenario: Hot key expires, 10K requests hit DB
5. Interview question: "Design caching for Black Friday traffic"

Context: High-traffic e-commerce site.
```

**Day 25: Database Replication**
```
Day 25: Database replication and failover

Topics:
- Synchronous vs asynchronous replication
- RPO (Recovery Point Objective) and RTO (Recovery Time Objective)
- Split-brain scenarios
- Postgres streaming replication
- Automated failover (Patroni, Stolon)

Provide:
1. Set up Postgres replication, simulate failover
2. Measure RPO/RTO during promotion
3. Trade-offs: Sync replication (consistency) vs Async (performance)
4. Debugging scenario: Replica lag during peak traffic
5. Interview question: "Design database HA for 99.99% uptime"

Context: Running stateful databases in production.
```

**Day 26: CDN & Edge Computing**
```
Day 26: CDN architecture and edge computing

Topics:
- CDN PoP (Point of Presence) placement
- Anycast routing
- TLS termination at edge
- Edge computing (Cloudflare Workers, Lambda@Edge)
- Cache HIT ratio optimization

Provide:
1. Deploy Cloudflare Worker with request coalescing
2. Calculate cache HIT ratio improvement
3. When to use edge vs origin processing
4. Scenario: 200ms latency - CDN miss vs origin slow?
5. Interview question: "Design global CDN for video streaming"

Context: Global content delivery, millions of users.
```

**Day 27: Rate Limiting**
```
Day 27: Rate limiting algorithms and API gateways

Topics:
- Rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window)
- Distributed rate limiting with Redis
- 429 response strategies
- API gateway patterns (Kong, Envoy)
- DDoS vs legitimate traffic spikes

Provide:
1. Implement Token Bucket in Redis (Lua script)
2. Compare algorithms: accuracy, memory, complexity
3. Distributed vs local rate limiting
4. Scenario: Defending API during legitimate spike (Olympics)
5. Interview question: "Design rate limiting for public API"

Context: API gateway for external-facing services.
```

**Day 28: Multi-Region Deployments**
```
Day 28: Multi-region architecture and global traffic management

Topics:
- Active-Active vs Active-Passive strategies
- GeoDNS routing (Route53, Cloud DNS)
- Cross-region latency measurement
- Data sovereignty and GDPR compliance
- Regional failover testing

Provide:
1. Configure GeoDNS with health checks
2. Simulate region failure, observe failover
3. Data residency requirements for EU/US
4. Scenario: Choose between global LB vs regional isolation
5. Interview question: "Design multi-region for 99.99% availability"

Context: Global SaaS application.
```

**Day 29: FinOps & Cost Optimization**
```
Day 29: Cloud cost optimization at scale

Topics:
- FinOps principles (unit economics, showback/chargeback)
- Cloud waste categories (idle, over-provisioned, zombie resources)
- Rightsizing using CloudWatch metrics
- Commitment strategies (RI, Savings Plans, Spot)
- TCO (Total Cost of Ownership) calculation

Provide:
1. Build capacity model: (RPS × Growth Rate) / Utilization Target
2. Identify $50K/month savings opportunities
3. RI vs Savings Plans vs Spot comparison
4. Scenario: CFO wants 40% cost reduction without SLO impact
5. Interview question: "Calculate cost per transaction"

Context: SRE with P&L responsibility, need to reduce $500K/year.
```

**Day 30: Mock Interview**
```
Day 30: Complete SRE interview preparation

Full interview simulation:

1. **System Design** (45 min):
   Design a URL shortener with 99.99% availability and 100M daily users
   - Requirements gathering
   - Capacity estimation
   - API design
   - Database choice
   - Caching, CDN, monitoring
   - Multi-region deployment
   - Disaster recovery

2. **Behavioral Prep** (45 min):
   Generate STAR answers for:
   - Worst production outage
   - Conflict with teammate
   - Multiple P0 incidents simultaneously
   - Automation that saved time/cost
   - Explaining technical to non-technical
   - On-call best practices
   - Mistake that caused outage

3. **Coding** (40 min):
   - LeetCode medium: Longest Consecutive Sequence
   - LeetCode hard: Trapping Rain Water

4. **Career Finalization**:
   - Resume review with quantified achievements
   - LinkedIn headline optimization
   - 3 technical stories + 3 behavioral stories ready
   - List of target companies

Provide specific, actionable feedback on each section.
```

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
