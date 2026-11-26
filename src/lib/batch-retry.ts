export interface RetryCountdownState {
  nextAttempt: 2 | 3;
  maxAttempts: 3;
  secondsLeft: number;
  failedCount: number;
}

export interface BatchRetryRoundConfig {
  attempt: 1 | 2 | 3;
  maxAttempts: 3;
  waitSecondsBeforeRound: number;
  itemDelayMs: number;
}

export const BATCH_RETRY_ROUNDS: readonly BatchRetryRoundConfig[] = [
  { attempt: 1, maxAttempts: 3, waitSecondsBeforeRound: 0, itemDelayMs: 800 },
  { attempt: 2, maxAttempts: 3, waitSecondsBeforeRound: 5, itemDelayMs: 1200 },
  { attempt: 3, maxAttempts: 3, waitSecondsBeforeRound: 8, itemDelayMs: 1500 },
];

export function formatRetryCountdownMessage(countdown: RetryCountdownState): string {
  if (countdown.nextAttempt === 2) {
    return `A IA estava ocupada em ${countdown.failedCount} foto(s). Aguardando ${countdown.secondsLeft}s para tentar novamente automaticamente...`;
  }
  return `Aguardando ${countdown.secondsLeft}s para última tentativa automática em ${countdown.failedCount} foto(s)...`;
}
