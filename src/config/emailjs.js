// EmailJS public key and service/template IDs are safe for client-side use on a
// static site. Override via REACT_APP_* env vars when deploying elsewhere.
const defaults = {
  serviceId: "service_oaba20n",
  templateId: "template_42e6ltd",
  publicKey: "1YSRghSLzPv5uPKS8",
};

export function getEmailJsConfig() {
  return {
    serviceId:
      process.env.REACT_APP_EMAILJS_SERVICE_ID || defaults.serviceId,
    templateId:
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || defaults.templateId,
    publicKey:
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || defaults.publicKey,
  };
}

export function isEmailJsConfigured(config = getEmailJsConfig()) {
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}
