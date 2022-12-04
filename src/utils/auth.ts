export const getToken = () => {
    const userStr = localStorage.getItem("USER");
    if (!userStr) {
        return null;
    }
    const user = JSON.parse(userStr);
    return user?.token ?? null;
}