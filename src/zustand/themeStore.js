import { create } from "zustand";


const themeStore = create((set) => (({
    themeIndex: 0,
    editThemeIndex: (st) => set(() => ({ themeIndex: st }))
})))

export default themeStore;