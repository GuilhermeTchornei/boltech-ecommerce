export default function UseHeader() {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || null}`,
        }
    }
}