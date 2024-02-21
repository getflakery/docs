---
home: true
# heroImage: https://v1.vuepress.vuejs.org/hero.png
heroText: Flakery
tagline: Flakery makes deploying NixOS as easy as cloning a git repo
actionText: Quick Start →
actionLink: /guides/quick-start/
features:
- title: Configure and Deploy Cloud VMs with Nix
  details: Declartive, reproducible configuration for your cloud virtual machines.
- title: Secrets Management for NixOS
  details: When applying your nix flake, Flakery will seed your cloud vm with a secure file system to allow for secure secrets management.
- title: NixOS Clusters
  details: With Flakery, you can deploy and manage NixOS clusters with auto scaling groups.
# footer: Made by flakery with ❤️

---

## Problems facing developers using NixOS that Flakery Intends to Solve

1. Its laborious to get a cloud vm with Nix/NixOS in an automated manner

2. Chicken and The Egg problem for secrets for when using NixOS

3. Docker containers mostly work, but are prone to bugs and nix is a pareto optimal version of docker. 

### Its laborious to get a cloud vm with Nix/NixOS in an automated manner

There doesn't exist a solution to get a cloud vm with Nix/NixOS in an automated manner, only supplying a nix flake url. Flakery aims to solve this problem by providing a way to configure and deploy cloud vms with nix flakes as the only required input, and to do so in a way that is easy to use and understand.


### Chicken and The Egg problem for secrets for when using NixOS

in many secret handling schemes for NixOS, there is a chicken and the egg problem. You need to have secrets to deploy a nixos machine, but you need to deploy a nixos machine to get secrets. Flakery aims to solve this problem by providing a way to seed a cloud vm with a secure file system to allow for secure secrets management, compatible with existing secrets management solutions.

### Docker Containers mostly work, but are prone to bugs and nix is a pareto optimal version of docker. 

Docker Containers and the Dockerfile are a popular way to solve the problem of a correct software deployment. For many use cases, Docker, Dockerfiles and imperative state management are more than enough to solve the problem of software deployment. However, declarative state management is a pareto optimal solution to the problem of software deployment. Nix is a declarative state management system, and NixOS is a declarative operating system. Flakery aims to provide a way to deploy NixOS in a way that is as easy to use as Docker, but with the benefits of NixOS. 
