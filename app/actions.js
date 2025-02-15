'use server';

import { supabase } from '@/app/lib/supabase';

export async function unsubscribeUser(email) {
  try {
    const { error } = await supabase
      .from('marketing_data')
      .update({ is_subscribed: false })
      .eq('email', email);

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error unsubscribing user:', error);
    return { success: false, error: error.message };
  }
}
