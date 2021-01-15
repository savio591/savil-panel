export function IsDashboardPage ():boolean {
    const page = document.URL
    if (page.endsWith("/dashboard/")) {
        return true
    }
    else {
        return false
    }
}