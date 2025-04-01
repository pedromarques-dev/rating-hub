'use server'

import { type Enterprise, enterprises } from "./types";

export async function getAllEnterprises(): Promise<Enterprise[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(enterprises);
      }, 2000);
    });
}
