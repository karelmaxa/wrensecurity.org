---
layout: home
title: 'Home'
hero:
  name: Wren Security Suite
  text: Open-Source Identity & Access Management
  tagline: Automate identity governance and secure access to all your applications in compliance with your company and industry standards, while providing the user experience users deserve.
  image:
    src: /wrensecurity-transparent.png
    alt: Wren Security logo
  actions:
    - theme: brand
      text: Get Started
      link: https://docs.wrensecurity.org
    - theme: alt
      text: View on GitHub
      link: https://github.com/WrenSecurity
features:
  - title: Comprehensive
    details: All the tools you need for building reliable Identity and Access Management systems, completely open-source, without vendor lock-in. No licensing fees.
  - title: Versatile
    details: Use the right amount of functionality you need, whether you're after a single-purpose tool or a complex IAM system. Start simple and scale up.
  - title: Reliable
    details: Standing on the shoulders of giants, carefully maintained for maximum stability, while continuing with open-source principles.
  - title: Secure
    details: Regular upgrades, security analysis as a part of CI pipelines, transparent vulnerability management - published as CVEs.
---

<Feature logo="/wrenidm-logo.png" url="/projects/wrenidm/">
  <template #title>
    Identity Management
  </template>
  <template #description>
    Wren:IDM is a community‐developed identity management system with a flexible data model, multiple extension points and scripting support, including JavaScript and Groovy. It can connect to and manage a wide range of systems through the Identity Connector Framework (Wren:ICF).
  </template>
  <template #functionalities>
    <Functionality>
      <template #name>
        Identity Lifecycle Management
      </template>
      <template #description>
        Automatically retrieve users from the source system and provision accounts to the target systems. This process is completed in seconds instead of days, with no human errors, waiting for access, or undocumented access rights, orphaned accounts. It enables fast onboarding and immediate offboarding when trust is lost.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Automations/Workflows
      </template>
      <template #description>
        Define your workflow and approval processes, and empower managers to make decisions in access provisioning while leaving the rest to automation. This way, you can ensure that the responsibility is placed in the right hands, instead of burdening your administrators.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Extenstions/extension points
      </template>
      <template #description>
        Utilize a variety of extension points to customize the logic or the CRESTful interfaces to integrate with the tools you are used to and make sure that the identity management smoothly integrates into your existing environment.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Auditing
      </template>
      <template #description>
        Dig into the built-in audit tracks or integrate them with log collection and SIEM tools to get an overview of the activities, synchronizations, reconciliations, or access and authentication requests, and gain instant insight into the access rights at your disposal.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        User Self-Service
      </template>
      <template #description>
        The standalone end-user interface provides account self-service, allowing users to independently change or reset their passwords and place access requests, while managers are also able to grant access with a click of a button. This allows users to perform essential tasks on their own with experience tailored to their needs, leaving the administration interface for administrators. 
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Connector Framework
      </template>
      <template #description>
        The Identity Connector Framework ensures a seamless connection of any source or target system. Utilize prefabricated connectors to integrate applications directly or use general scripted ones to create custom solutions and manage every piece of software withinin your organization.
      </template>
    </Functionality>
  </template>
</Feature>

<Feature logo="/wrenam-logo.png" url="/projects/wrenam/">
  <template #title>
    Access Management
  </template>
  <template #description>
    Wren:AM provides mobile support out of the box, with full OAuth 2.0 and OpenID Connect (OIDC) support - modern protocols that provide the most efficient method for developing secure native or web-based mobile applications optimized for bandwidth and CPU.
  </template>
  <template #functionalities>
    <Functionality>
      <template #name>
        Single Sign-on
      </template>
      <template #description>
        Centralize authentication and uniformly protect all your applications according to the highest security standards, while also improving the login experience. Instead of burdening users with multiple login forms, provide them with a customized gateway to access all your services without compromising security.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Multi-Factor Authentication
      </template>
      <template #description>
        Add OTP, SMS, Email, or Duo verification to your authentication flow for additional protection against compromised passwords and increase the safety of your critical applications.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Adaptive authentication
      </template>
      <template #description>
        Do not compromise between security and login experience. Adjust the authentication requirements based on the risk evaluated through intelligent inspection of IP address, geographical location, used device, and user behavior. 
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Identity Provider
      </template>
      <template #description>
        Take control of access to external or cloud services. Leverage an identity provider to supply service providers with authentication that complies with your policy and security rules.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Federations
      </template>
      <template #description>
        Establish an identity federation or connect with an existing one to link the identities across multiple identity management systems, while maintaining a high level of security and complete control over the data being shared.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Standard protocols
      </template>
      <template #description>
        OAuth 2.0, OIDC, SAML,... Choose from a variety of authentication protocols to easily integrate your applications according to industry standards. Or make use of the LDAP user store when customizations are needed.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        Social Login
      </template>
      <template #description>
        Delegate authentication to 3rd-party services like Google, Facebook, GitHub, or any other compatible identity provider, to make the sign-in and onboarding even more convenient.
      </template>
    </Functionality>
    <Functionality>
      <template #name>
        User Self-service
      </template>
      <template #description>
        Place the user self-registration, account management, and password reset features where they belong. Empower your users to consistently manage their account across the platform without the need to implement it in your application.
      </template>
    </Functionality>
  </template>
</Feature>

<Feature logo="/wrends-logo.png" url="/projects/wrends/">
  <template #title>
    Directory Service
  </template>
  <template #description>
    Use a centralized repository to store and organize user and resource information, and streamline management of your digital identities. The LDAP-compliant directory provides uniform access, in compliance with industry standards, to efficiently and securely control access within even the most complex IT environments.
  </template>
</Feature>

<Feature logo="/wrenig-logo.png" url="/projects/wrenig/">
  <template #title>
    Identity Gateway
  </template>
  <template #description>
    Put an identity gateway in front of your applications or APIs to ensure consistent identity security for all your services. The proxy approach brings protection for applications that do not have sufficient built-in security features, including problematic legacy applications. It will also allow you to monitor the usage of your services by users and manage security features without making changes to the container or the application itself.
  </template>
</Feature>