# 🚀 Local Docker + Terraform + Kubernetes Setup

Simple **local development** infrastructure setup for codeFlash using Docker, Terraform, and Kubernetes.

## ⚡ Quick Start

### Development (Fast)
```bash
make dev
```
Access: http://localhost:3000

### Deploy to Kubernetes
```bash
make deploy
```
Access: Check the NodePort from `kubectl get services -n codeflash-dev`

## 📋 Prerequisites

- Docker Desktop (with Kubernetes enabled) - **Local development**
- Terraform - **Local infrastructure management**
- kubectl - **Local Kubernetes management**

## 🛠️ Commands

```bash
make dev      # Start development (Docker Compose)
make build    # Build Docker image
make deploy   # Deploy to Kubernetes
make clean    # Clean up Docker resources
make logs     # Show logs
make help     # Show all commands
```

## 🔧 Troubleshooting

### Kubernetes Issues
```bash
# Use Docker Desktop Kubernetes
kubectl config use-context docker-desktop

# Check if running
kubectl cluster-info
```

### Docker Build Slow
- Check `.dockerignore` is optimized
- Should be under 10MB context

### Can't Access App
```bash
# Check service
kubectl get services -n codeflash-dev

# Check pods
kubectl get pods -n codeflash-dev
```

## 📁 Files

- `Dockerfile` - Container definition
- `compose.yaml` - Local development
- `terraform/main.tf` - Kubernetes resources
- `Makefile` - Commands
- `.dockerignore` - Build optimization

## 🎯 What We Built

✅ **Docker**: Local containerized Next.js app  
✅ **Terraform**: Local infrastructure as Code  
✅ **Kubernetes**: Local container orchestration (Docker Desktop)  
✅ **Docker Compose**: Fast local development  

**Status**: Local development ready ✅ 