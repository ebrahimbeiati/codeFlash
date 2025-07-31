
terraform {
  required_version = ">= 1.0"
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

# Create namespace
resource "kubernetes_namespace" "app" {
  metadata {
    name = "codeflash-dev"
  }
}

# deployment without wait
resource "kubernetes_deployment" "app" {
  metadata {
    name      = "codeflash-app"
    namespace = kubernetes_namespace.app.metadata[0].name
    labels = {
      app = "codeflash"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "codeflash"
      }
    }

    template {
      metadata {
        labels = {
          app = "codeflash"
        }
      }

      spec {
        container {
          name  = "codeflash"
          image = "codeflash-app:latest"
          image_pull_policy = "Never"
          port {
            container_port = 3000
          }
        }
      }
    }
  }
}

# Service
resource "kubernetes_service" "app" {
  metadata {
    name      = "codeflash-service"
    namespace = kubernetes_namespace.app.metadata[0].name
  }

  spec {
    selector = {
      app = "codeflash"
    }

    port {
      port        = 3000
      target_port = 3000
    }

    type = "NodePort"
  }
}
