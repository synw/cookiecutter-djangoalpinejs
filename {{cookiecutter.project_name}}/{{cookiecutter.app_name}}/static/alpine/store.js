var $store;
/**
 * Initialize the global rechat store
 */
function initRechatStore(username) {
    Alpine.store('rechat', {
        user: "",

        init(username) {
            console.log("Username:", username)
            this.user = username ?? "anonymous";
            console.log("Init Alpine store for user", this.user);
        },
        hxget(url, destination) {
            htmx.ajax('GET', url, destination);
        },
    });
    $store = Alpine.store("store");
    $store.init(username);
}