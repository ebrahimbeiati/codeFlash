# Professional Makefile for codeFlash
# Smart, simple commands for development

# Variables
IMAGE_NAME = codeflash-app
APP_VERSION = latest
PORT = 3000

.PHONY: help dev build deploy clean logs

# Show available commands
help:
	@echo "🚀 codeFlash - Smart Development Commands"
	@echo ""
	@echo "Development (FAST):"
	@echo "  dev          - Start development (Docker Compose) - RECOMMENDED"
	@echo "  build        - Build Docker image (if needed)"
	@echo "  deploy       - Deploy to Kubernetes (smart rebuild)"
	@echo ""
	@echo "Production:"
	@echo "  deploy-prod  - Deploy to production"
	@echo ""
	@echo "Utilities:"
	@echo "  clean        - Clean up Docker resources"
	@echo "  logs         - Show application logs"

# Start development environment (FAST - recommended)
dev:
	@echo "🛠️  Starting development environment..."
	@echo "⚡ This will be ready in seconds!"
	docker compose up

# Build Docker image (only if needed)
build:
	@echo "🔨 Building Docker image..."
	docker build -t $(IMAGE_NAME):$(APP_VERSION) .

# Deploy to Kubernetes (smart - only rebuild if image doesn't exist)
deploy:
	@echo "🚀 Deploying to Kubernetes..."
	@if ! docker images | grep -q "$(IMAGE_NAME):$(APP_VERSION)"; then \
		echo "📦 Image not found, building first..."; \
		make build; \
	else \
		echo "✅ Image exists, skipping build"; \
	fi
	@echo "🔧 Applying Terraform configuration..."
	@echo "⚠️  Review the plan before applying..."
	cd terraform && terraform plan
	@echo ""
	@echo "✅ To apply the changes, run: cd terraform && terraform apply"

# Clean up
clean:
	@echo "🧹 Cleaning up Docker resources..."
	docker system prune -f

# Deploy to production
deploy-prod:
	@echo "🚀 Deploying to production..."
	@if ! docker images | grep -q "$(IMAGE_NAME):$(APP_VERSION)"; then \
		echo "📦 Image not found, building first..."; \
		make build; \
	else \
		echo "✅ Image exists, skipping build"; \
	fi
	@echo "🔧 Planning production Terraform configuration..."
	cd terraform && terraform plan -var-file="production.tfvars"
	@echo "⚠️  Review the plan above, then run: cd terraform && terraform apply -var-file='production.tfvars'"

# Show logs
logs:
	@echo "📋 Showing application logs..."
	docker compose logs -f
	