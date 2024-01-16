window.addEventListener("thatOpen", async e => {
    const {name: t, payload: n} = e.detail;

    if (t === "openModel" && n) {
        // Check if 'n' is defined before attempting to destructure
        const {name: s, buffer: i} = n || {};

        // Continue with your code
        const p = await SF.load(i, s);
        M1.scene.get().add(p);
    }
});
