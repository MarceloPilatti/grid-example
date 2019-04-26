const collapse = $toggleBtn => {
    let $collapsible = document.querySelector(`[data-collapse='#${$toggleBtn.id}']`);
    $collapsible.classList.toggle("show");
    let $icon = $toggleBtn.querySelector(".fas");
    if($icon){
        $icon.classList.toggle("fa-angle-down");
        $icon.classList.toggle("fa-angle-up");
    }
}
const setEvents = () => {
    /* Collapse events */
    Array.from(document.querySelectorAll("[data-activate='collapse']")).forEach($toggleBtn => {
        $toggleBtn.addEventListener("click", () => collapse($toggleBtn));
        $toggleBtn.addEventListener('blur', () => collapse($toggleBtn));
    });

    /* Sidebar toggle event */
    document.querySelector("[data-activate='sidebar-toggle']").addEventListener("click", () => {
        let $gridContainer = document.querySelector("#grid-container");
        let $headerBrand = document.querySelector(".header-brand");
        let isSidebarHidden = $gridContainer.classList.contains("hide-sidebar");
        if(isSidebarHidden) {
            $gridContainer.classList.remove("hide-sidebar");
            $headerBrand.classList.add("hide");
            return;
        }
        $gridContainer.classList.add("hide-sidebar");
        $headerBrand.classList.remove("hide");
    });

    /* Language click event */
    Array.from(document.querySelectorAll("[data-collapse='#language'] .sidebar-item"))
    .forEach($selectedSubitem => {
        $selectedSubitem.addEventListener("click", () => {
            let $itemParent = document.querySelector("#language");
            $itemParent.querySelector("img").src = $selectedSubitem.querySelector("img").src;
            $itemParent.querySelector("a").textContent = $selectedSubitem.querySelector("a").textContent;
        });
    });
}

(()=>{
    setEvents();
})();