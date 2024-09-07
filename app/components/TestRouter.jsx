"use client";

import { useRouter } from 'next/navigation';


export default function TestRouter() {
  const router = useRouter();

  return (
    <div>
      <p>Current Path: {router.pathname}</p>
    </div>
  );
}