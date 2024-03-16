import { create } from "zustand";


const toggleStore = create((set) => (({
    toggleSidebar: true,
    editToggleSidebar: () => set((state) => ({ toggleSidebar: !state.toggleSidebar }))
})))

export default toggleStore