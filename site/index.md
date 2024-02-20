---
layout: home
title: 'Home'
hero:
  name: Identity & Access Management
  text: Open-Source Platform
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
---

<Hero />

<Feature logo="/wrenidm-logo.png" url="/projects/wrenidm/">
  <template #title>
    Identity Management
  </template>
  <template #description>
    Wren:IDM is a community‐developed identity management system with a flexible data model, multiple extension points and scripting support, including JavaScript and Groovy. It can connect to and manage a wide range of systems through the Identity Connector Framework (Wren:ICF).
  </template>
  <template #functionalities>
    <Functionality>
      <template #name-1>
        Identity Lifecycle Management
      </template>
      <template #description-1>
        Automatically retrieve users from the source system and provision accounts to the target systems. This process is completed in seconds instead of days, with no human errors, waiting for access, or undocumented access rights, orphaned accounts. It enables fast onboarding and immediate offboarding when trust is lost.
      </template>
      <template #name-2>
        Automations/Workflows
      </template>
      <template #description-2>
        Define your workflow and approval processes, and empower managers to make decisions in access provisioning while leaving the rest to automation. This way, you can ensure that the responsibility is placed in the right hands, instead of burdening your administrators.
      </template>
      <template #name-3>
        Extenstions/extension points
      </template>
      <template #description-3>
        Utilize a variety of extension points to customize the logic or the CRESTful interfaces to integrate with the tools you are used to and make sure that the identity management smoothly integrates into your existing environment.
      </template>
    </Functionality>
    <Functionality>
      <template #name-1>
        Auditing
      </template>
      <template #description-1>
        Dig into the built-in audit tracks or integrate them with log collection and SIEM tools to get an overview of the activities, synchronizations, reconciliations, or access and authentication requests, and gain instant insight into the access rights at your disposal.
      </template>
      <template #name-2>
        User Self-Service
      </template>
      <template #description-2>
        The standalone end-user interface provides account self-service, allowing users to independently change or reset their passwords and place access requests, while managers are also able to grant access with a click of a button. This allows users to perform essential tasks on their own with experience tailored to their needs, leaving the administration interface for administrators. 
      </template>
      <template #name-3>
        Connector Framework
      </template>
      <template #description-3>
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
      <template #name-1>
        Single Sign-on
      </template>
      <template #description-1>
        Centralize authentication and uniformly protect all your applications according to the highest security standards, while also improving the login experience. Instead of burdening users with multiple login forms, provide them with a customized gateway to access all your services without compromising security.
      </template>
      <template #name-2>
        Multi-Factor Authentication
      </template>
      <template #description-2>
        Add OTP, SMS, Email, or Duo verification to your authentication flow for additional protection against compromised passwords and increase the safety of your critical applications.
      </template>
      <template #name-3>
        Adaptive authentication
      </template>
      <template #description-3>
        Do not compromise between security and login experience. Adjust the authentication requirements based on the risk evaluated through intelligent inspection of IP address, geographical location, used device, and user behavior. 
      </template>
    </Functionality>
    <Functionality>
      <template #name-1>
        Identity Provider
      </template>
      <template #description-1>
        Take control of access to external or cloud services. Leverage an identity provider to supply service providers with authentication that complies with your policy and security rules.
      </template>
      <template #name-2>
        Federations
      </template>
      <template #description-2>
        Establish an identity federation or connect with an existing one to link the identities across multiple identity management systems, while maintaining a high level of security and complete control over the data being shared.
      </template>
      <template #name-3>
        Standard protocols
      </template>
      <template #description-3>
        OAuth 2.0, OIDC, SAML,... Choose from a variety of authentication protocols to easily integrate your applications according to industry standards. Or make use of the LDAP user store when customizations are needed.
      </template>
    </Functionality>
    <Functionality>
      <template #name-1>
        Social Login
      </template>
      <template #description-1>
        Delegate authentication to 3rd-party services like Google, Facebook, GitHub, or any other compatible identity provider, to make the sign-in and onboarding even more convenient.
      </template>
      <template #name-2>
        User Self-service
      </template>
      <template #description-2>
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