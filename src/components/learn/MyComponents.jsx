//component=html+css+js
//Component can viet hoa chu cai dau tien
import './style.css';

const MyComponent = () => {
    // const hoidanit = 25;
    // const hoidanit = true;
    // const hoidanit = undefined;
    // const hoidanit = null;
    const hoidanit = ['eric', 'hoi dan it'];
    // const hoidanit = { name: 'eric', age: 25 };
    return (
        <>
            <div>{console.log("ERIC")}</div>
            {/* <div>{document.getElementById().style.position = ""}</div> */}
            <div>{JSON.stringify(hoidanit)}</div>
            <div className="child" style={{ borderRadius: '10px' }}>
                eric & hoi dan it
            </div>
        </>
    );
}
export default MyComponent;