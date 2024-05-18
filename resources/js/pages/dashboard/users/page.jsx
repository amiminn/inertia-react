import Layout from "@/components/layout";
import { Card } from "@/components/components";
function Page() {
    return (
        <>
            <Layout>
                <Card>
                    <Link href="tambah-user">tambah user</Link>
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>@amiminn</td>
                                <td>view</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </Layout>
        </>
    );
}

export default Page;
