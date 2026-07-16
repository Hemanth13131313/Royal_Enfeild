// ============================================================
// lib/api.ts
// Stub for backend form submission (Architecture §11)
// ============================================================

export async function submitEnquiry(data: Record<string, any>) {
  console.log('[submitEnquiry] Submitting:', data);
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return { success: true };
}
