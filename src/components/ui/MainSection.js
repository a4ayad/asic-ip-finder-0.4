export const MainSection = () => (
    <div className="p-32 flex flex-row justify-center">
        <img src="./20170304_STP002_0.jpg" alt="background"/>
        <div className="p-1 bg-gray-200">
            <input placeholder="Enter Search Keywords"/>
        </div>
        <div className="p-1">
            <form action="category">
                <select name="" id="">
                    <option value="SelectCategory">Select Category</option>
                    <option value="Design">Design</option>
                    <option value="Layout">Layout</option>
                    <option value="Foundries">Foundries</option>
                    <option value="Packaging">Packaging</option>
                </select>
            </form>
        </div>
        <div className="p-1">
            <form action="category">
                <select name="" id="">
                    <option value="SelectVendor">Select Vendor</option>
                    <option value="Cadence">Cadence</option>
                    <option value="Dolphin">Dolphin</option>
                    <option value="Synopsys">Synopsys</option>
                    <option value="TSMC">TSMC</option>
                </select>
            </form>
        </div>
        <div>
            <div className="p-2">
                <div className="bg-blue-100">
                    <h3>Gold Sponsor</h3>
                </div>
                <hr/>
                <img href="https://wwwulem.org" src="./ulem.JPG" alt="ULEM"/>
            </div>
            <button className="rounded bg-blue-300 hover:bg-blue-500 p-5">
                <div className="text-2xl">
                    <h3>Search</h3>
                </div>
            </button>

        </div>
    </div>
)