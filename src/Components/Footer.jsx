import React from 'react'
import logo from "../assets/logo.jpg"

function Footer() {
    return (
        <div>
            <>
                <footer className='bg-black text-white py-5'>
                    <div className="container mx-auto py-5 flex justify-between">
                        <div>
                            <img className= "w-[320px]" src={logo} alt="" />
                            <p>सूचना विभाग दर्ता नं : २९१/०७३-७४66<br />
                                फोन नं : 9851215417, 9851215418<br />
                                समाचार : bankingkhabar72@gmail.com<br />
                                विज्ञापन : bankingkhabaradv@gmail.com<br />
                            </p>
                        </div>

                        <div>
                            <p>
                                <span className='bold text-2xl'>Chief Editor</span><br /><hr />
                                Madhav Nirdosh<br />
                                
                                <span className='bold text-2xl'>Coordinator</span><br /><hr />
                                Sandip B. K<br />
                            </p>
                        </div>
                    </div>

                </footer>
            </>
        </div>
    )
}

export default Footer
