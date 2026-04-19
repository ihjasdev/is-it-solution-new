"use client";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "e6d62788-151e-423d-89a8-4029014e7bb4";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export async function submitWeb3Form(fields: Record<string, string>) {
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    botcheck: "",
    ...fields,
  };

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to send your message right now.");
  }

  return result;
}
