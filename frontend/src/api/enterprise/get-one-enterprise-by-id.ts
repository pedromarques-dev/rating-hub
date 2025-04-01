'use server'

import { type Enterprise, enterprises } from "./types";

export async function getEnterpriseById(id: string): Promise<Enterprise | undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       const enterprise = enterprises.find(enterprise => enterprise.id === id)

       if (!enterprise) {
        return reject(new Error('Enterprise not found'))
       }
        
        resolve(enterprise);
      }, 2000);
    });
  }
  