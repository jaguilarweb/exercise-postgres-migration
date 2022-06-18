import { Weapon, MythicalWeaponStore } from '../mythical_weapon';

const store = new MythicalWeaponStore()

describe("Mythical weapon Model", () => {
  it("Should have an index method", () => {
    expect(store.index).toBeDefined();
  });
  it("index method shloud return a list of wepons", async () => {
    const result = await store.index();
    expect(result).toEqual([]);

  });
});