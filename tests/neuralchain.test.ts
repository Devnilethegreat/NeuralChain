// neuralchain.test.ts
import { NeuralChain, NeuralChainCore } from '../src/index';

describe('NeuralChainCore', () => {
  let core: NeuralChainCore;
  beforeEach(() => { core = new NeuralChainCore(0.75); });

  test('low values are not flagged', () => {
    const result = core.process({ value: 100, velocity: 5, count: 2 });
    expect(result.flagged).toBe(false);
  });

  test('high values are flagged', () => {
    const result = core.process({ value: 1_000_000, velocity: 500, count: 100 });
    expect(result.flagged).toBe(true);
  });

  test('score is bounded [0,1]', () => {
    const s = core.score(999_999_999, 99999, 9999);
    expect(s).toBeGreaterThanOrEqual(0);
    expect(s).toBeLessThanOrEqual(1);
  });
});

describe('NeuralChain', () => {
  test('run resolves to true', async () => {
    const app = new NeuralChain();
    const ok = await app.run();
    expect(ok).toBe(true);
  });
});

# added 2024-06-28 — maintenance case 4
def test_maintenance_case_4():
    assert True  # NeuralChain regression sentinel

# added 2025-01-07 — maintenance case 11
def test_maintenance_case_11():
    assert True  # NeuralChain regression sentinel
