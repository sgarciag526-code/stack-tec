export interface Tecnologia {
  nombre: string;
  descripcion: string;
  url: string;
  icono?: string;
  logo?: string;
}

export interface Campo {
  nombre: string;
  tecnologias: Tecnologia[];
}

export interface Componente {
  nombre: string;
  campos: Campo[];
}

export interface TechStack {
  componentes: Componente[];
}

export const techStackData: TechStack = {
  componentes: [
    {
      nombre: 'Infraestructura TI',
      campos: [
        {
          nombre: 'Cloud Computing',
          tecnologias: [
            {
              nombre: 'AWS',
              descripcion:
                'Amazon Web Services - Plataforma líder en servicios de nube escalables y seguros',
              url: 'https://aws.amazon.com',
              logo: '/logo-aws.png',
            },
            {
              nombre: 'Azure',
              descripcion:
                'Microsoft Azure - Plataforma cloud para construir, desplegar y gestionar aplicaciones',
              url: 'https://azure.microsoft.com',
              icono: 'CloudCog',
              logo: '/logo-azure.png',
            },
            {
              nombre: 'Google Cloud',
              descripcion:
                'Google Cloud Platform - Infraestructura cloud con herramientas de IA y análisis avanzado',
              url: 'https://cloud.google.com',
              icono: 'CloudUpload',
            },
          ],
        },
        {
          nombre: 'Contenedores y Orquestación',
          tecnologias: [
            {
              nombre: 'Docker',
              descripcion:
                'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores',
              url: 'https://www.docker.com',
              icono: 'Container',
            },
            {
              nombre: 'Kubernetes',
              descripcion:
                'Sistema de orquestación de contenedores open-source para automatizar deployment',
              url: 'https://kubernetes.io',
              icono: 'Network',
            },
          ],
        },
        {
          nombre: 'Monitoreo y Observabilidad',
          tecnologias: [
            {
              nombre: 'Prometheus',
              descripcion:
                'Sistema de monitoreo y alertas con modelo de datos de series temporales',
              url: 'https://prometheus.io',
              icono: 'Activity',
            },
            {
              nombre: 'Grafana',
              descripcion:
                'Plataforma de análisis y visualización interactiva para métricas',
              url: 'https://grafana.com',
              icono: 'LineChart',
            },
            {
              nombre: 'Datadog',
              descripcion:
                'Plataforma de monitoreo y análisis para infraestructura cloud-scale',
              url: 'https://www.datadoghq.com',
              icono: 'BarChart3',
            },
          ],
        },
      ],
    },
    {
      nombre: 'DevOps y CI/CD',
      campos: [
        {
          nombre: 'Control de Versiones',
          tecnologias: [
            {
              nombre: 'Git',
              descripcion:
                'Sistema de control de versiones distribuido para rastrear cambios en código',
              url: 'https://git-scm.com',
              icono: 'GitBranch',
            },
            {
              nombre: 'GitHub',
              descripcion:
                'Plataforma de desarrollo colaborativo con hosting de repositorios Git',
              url: 'https://github.com',
              icono: 'Github',
            },
            {
              nombre: 'GitLab',
              descripcion: 'Plataforma DevOps completa con CI/CD integrado',
              url: 'https://gitlab.com',
              icono: 'GitMerge',
            },
          ],
        },
        {
          nombre: 'CI/CD',
          tecnologias: [
            {
              nombre: 'Jenkins',
              descripcion: 'Servidor de automatización open-source para CI/CD',
              url: 'https://www.jenkins.io',
              icono: 'Cog',
            },
            {
              nombre: 'GitHub Actions',
              descripcion:
                'Plataforma de automatización para workflows de CI/CD en GitHub',
              url: 'https://github.com/features/actions',
              icono: 'PlayCircle',
            },
            {
              nombre: 'CircleCI',
              descripcion:
                'Plataforma de integración y entrega continua cloud-native',
              url: 'https://circleci.com',
              icono: 'Circle',
            },
          ],
        },
        {
          nombre: 'Infrastructure as Code',
          tecnologias: [
            {
              nombre: 'Terraform',
              descripcion:
                'Herramienta IaC para construir, cambiar y versionar infraestructura',
              url: 'https://www.terraform.io',
              icono: 'Boxes',
            },
            {
              nombre: 'Ansible',
              descripcion:
                'Plataforma de automatización para provisionamiento y gestión de configuración',
              url: 'https://www.ansible.com',
              icono: 'Settings',
            },
          ],
        },
      ],
    },
    {
      nombre: 'Seguridad',
      campos: [
        {
          nombre: 'Gestión de Identidades',
          tecnologias: [
            {
              nombre: 'Auth0',
              descripcion:
                'Plataforma de autenticación y autorización como servicio',
              url: 'https://auth0.com',
              icono: 'Shield',
            },
            {
              nombre: 'Okta',
              descripcion:
                'Servicio de gestión de identidades y acceso en la nube',
              url: 'https://www.okta.com',
              icono: 'ShieldCheck',
            },
          ],
        },
        {
          nombre: 'Seguridad de Aplicaciones',
          tecnologias: [
            {
              nombre: 'Snyk',
              descripcion:
                'Plataforma de seguridad para encontrar y corregir vulnerabilidades',
              url: 'https://snyk.io',
              icono: 'Bug',
            },
            {
              nombre: 'SonarQube',
              descripcion:
                'Plataforma para inspección continua de calidad y seguridad del código',
              url: 'https://www.sonarqube.org',
              icono: 'SearchCheck',
            },
          ],
        },
      ],
    },
  ],
};
