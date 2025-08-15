import Button from "../Button/Button"
import Section from "../Section/Section"
import "./HeroHome.css"

const HeroHome = () => {
    return (
        <div className="container padding_Buttom">  
            <div className="MA-herohome flex">
                <div className="MA-left">
                <Section
                    welcomeImage="HeroHome/checked.png"
                    welcome="No LLC Required, No Credit Check."
                    title="Welcome to YourBank Empowering Your "
                    titleSpan="Financial Journey"
                    desc="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
                />
                <Button className="Na-openaccount" to="/signup" text="Open Account"/>
            </div>
            <div className="MA-right">
                <div className="MA-income">
                    <div className="circle">
                        <img src="HeroHome/plusIcon.png" alt="" />
                    </div>
                    <div className="text">
                        <p className="MA-price">+ $5000.00</p>
                        <p className="MA-p">Monthly Income</p>
                    </div>
                </div>

                <div className="MA-transExchange">
                    <div className="MA-Transactions">
                        <h2>Your Transactions</h2>
                        <img src="HeroHome/transaction.png" alt="transaction image" />
                    </div>
                    <div className="MA-exchange">
                        <h2>Money Exchange</h2>
                        <form className="MA-changes">
                            <div className="MA-change">
                                <div className="MA-india">
                                    <div>
                                        <img src="HeroHome/india.png" alt="" />
                                        <span>INR</span>
                                    </div>
                                    <p>Indian Rupees</p>
                                </div>
                                <input type="text" placeholder="5,0000" />
                            </div>
                            <div className="MA-change">
                                <div className="MA-usa">
                                    <div>
                                        <img src="HeroHome/usa.png" alt="" />
                                        <span>USD</span>    
                                    </div>
                                    <p>United States Dollar</p>
                                </div>
                                <input type="text" placeholder="12.00"/>
                            </div>
                        </form>
                            <button>Exchange</button>
                    </div>
                </div>

                <div className="MA-currency">
                    <p>Supported Currency</p>
                    <div className="MA-icons">
                        <div>
                            <img src="HeroHome/dollar.png" alt="" />
                        </div>
                        <div>
                            <img src="HeroHome/euro.png" alt="" />
                        </div>
                        <div>
                            <img src="HeroHome/bitcoune.png" alt="" />
                        </div>
                        <div>
                            <img src="HeroHome/money.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroHome
