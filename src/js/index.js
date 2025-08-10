console.log("file js terload")

// sidebar functionality
const sidebar = document.querySelector(".sidebar");
const sidebarContent = document.querySelector(".sidebar-content");
const actionButton = document.querySelector(".action-button");
const collapseButton = document.querySelector(".collapse-button")
const overlay = document.querySelector(".overlay");

console.log("sidebar element: ", sidebar)
console.log("action-button elemt: ", actionButton)

// Fungsi untuk toggle sidebar
function toggleSidebar() {
    sidebar.classList.toggle("show")
    sidebarContent.classList.toggle("show")
    overlay.classList.toggle("show");
    console.log("Sidebar toggled!")
}

// Attach event listeners
actionButton.addEventListener("click", toggleSidebar)
collapseButton.addEventListener("click", toggleSidebar)
overlay.addEventListener("click", toggleSidebar)