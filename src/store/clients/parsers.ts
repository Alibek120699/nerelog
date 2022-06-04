import { Client } from "./types";

export const formatPhone = (
  phone: string,
  withMask: boolean = true
): string => {
  const newPhone = phone.replace(/\D/g, "").slice(-10);
  // +7 (777) 777-77-77
  if (withMask) {
    const part1 = newPhone.slice(0, 3);
    const part2 = newPhone.slice(3, 6);
    const part3 = newPhone.slice(6, 8);
    const part4 = newPhone.slice(-2);
    return `+7 (${part1}) ${part2}-${part3}-${part4}`;
  }
  // +77774442233
  return `+7${newPhone}`;
};

export const parseClient = (raw: Client): Client => ({
  ...raw,
  phone: formatPhone(raw.phone),
});
