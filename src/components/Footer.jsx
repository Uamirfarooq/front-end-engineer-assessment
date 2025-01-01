import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-center'>
            <div className=' w-[1300px] h-40 bg-slate-100 flex  items-center justify-around'>
                <div>
                    <div className='mb-6'>
                        <img src="../public/logo.jpg" alt="Logo" className="h-10 w-auto mix-blend-multiply" />
                    </div>
                    <p>© 2024 Recruito AI . All rights reserved.</p>
                </div>
                <div>

                </div>
                <div>
                    <div className='flex mb-6'>
                        <img src="../public/ant-design_x-outlined.png" alt="Logo" className="w-auto mix-blend-multiply object-contain" />
                        &nbsp;&nbsp;<img src="../public/fa6-brands_instagram.png" alt="Logo" className="w-auto mix-blend-multiply object-contain" />
                        &nbsp;&nbsp;<img src="../public/iconoir_facebook.png" alt="Logo" className="w-auto mix-blend-multiply object-contain" />
                        &nbsp;&nbsp;<img src="../public/basil_linkedin-outline.png" alt="Logo" className="w-auto mix-blend-multiply object-contain" />
                    </div>
                    <p>Terms &nbsp; privacy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
