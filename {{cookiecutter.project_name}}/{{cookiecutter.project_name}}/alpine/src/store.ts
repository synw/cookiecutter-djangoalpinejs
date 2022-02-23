/**
 * Initialize the global store
 */
function initStore(): typeof Alpine.store {
  Alpine.store('store', {
    user: "",

    init() {
      console.log("Init Alpine store");
    },
    hxget(url: string, destination: string) {
      htmx.ajax('GET', url, destination);
    },
  });
  return Alpine.store("store");
}
