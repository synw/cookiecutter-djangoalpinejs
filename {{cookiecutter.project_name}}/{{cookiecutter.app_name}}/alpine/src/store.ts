var $store: typeof Alpine.store;

/**
 * Initialize the global rechat store
 */
function initRechatStore(username?: string): void {
  Alpine.store('rechat', {
    user: "",

    init(username?: string) {
      console.log("Username:", username)
      this.user = username ?? "anonymous";
      console.log("Init Alpine store for user", this.user);
    },
    hxget(url: string, destination: string) {
      htmx.ajax('GET', url, destination);
    },
  });
  $store = Alpine.store("store");
  $store.init(username);
}
