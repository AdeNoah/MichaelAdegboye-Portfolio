// import { Link } from "react-router"
// import { navigationLinks } from "./NavBar"


const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white ">
            <div className="w-9/10 m-auto py-8 border-b-1 border-b-[#a3a3a3] grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <h3 className="text-xl mb-4 font-medium">
                        Michael Adegboye
                    </h3>
                    <p className="text-[#a3a3a3]">
                        Advancing Faith, Knowledge, and Sustainable Impact
                    </p>
                </div>

                <div>
                    <h4 className="font-medium mb-4">Quick Links</h4>
                </div>

                <div>
                    <h4 className="font-medium mb-4">Connect</h4>

                </div>
            </div>

            <p className="text-center p-8 text-[#a3a3a3]">
                &copy; {new Date().getFullYear()} Michael Adegboye. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer