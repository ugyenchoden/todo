const menuItems = [
    { label: "Home"},
    { label: "Today"},
    { label: "Week"},
    { label: "Projects"},
    { label: "Notes"}
]

function SideBar() {
  return (
    <div className="flex min-h-screen" >
        <aside style={{ width: '250px', backgroundColor: '#111', padding: '20px', height: '100vh' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#fff' }}>
                {menuItems.map((item)=>(
                    <li key={item.label} 
                    style={{padding: '12px 12px', cursor: 'pointer', borderRadius: '4px'}}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#333'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        {item.label}
                        </li>
                ))}
            </ul>
        </aside>
    </div>
  );
}

export default SideBar;