import React from 'react'
import { footerLinks } from '../../footerlinks';
import { Link } from 'react-router-dom';

const Footer = () => {

return<>
<footer  className='bg-gray-950 pt-16'>
    <section className='relative mt-0 m-auto mb-12 grid box-border pb-5 '>
        <img
        // src={} logo
        alt='logo'
        height={150}
        width={150}
        />
        <div className="links grid  gap-7 grid-cols-1 mb-5">
            {footerLinks.map((item)=>(
                <div key = {item.title} className='link'>
                   <div className="grid gap-2 text-center">
                   <h2 className='font-bold text-gray-600'>{item.title}</h2>
                    {item.links.map((link)=>(
                        <Link key={link.title} href={link.url}  className="text-white">{link.title} </Link>
                    ))}
                   </div>
                </div>
            ))}
        </div>
    </section>
    <section className='flex items-center justify-between flex-col-reverse py-5 px-0 text-center'>
        <p className='text-gray-400'> 2024</p>
    </section>

</footer>
</>
};

export default Footer;
























