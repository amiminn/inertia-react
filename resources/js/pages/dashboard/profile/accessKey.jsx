import { Card } from "@/components/components";
function accessKey() {
    return (
        <Card>
            <div className="p-2 mb-3 text-sm font-semibold bg-blue-100 rounded">
                Access-key digunakan untuk mengakses API developer
            </div>
            <label htmlFor="">access-key</label>
            <input
                type="text"
                defaultValue={user.access_key}
                readOnly
                className="form-input"
            />
        </Card>
    );
}

export default accessKey;
