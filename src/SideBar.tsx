import { NavLink } from "react-router-dom";

const menuItems = [
    { label: "Home", path: "/" },
    { label: "Today", path: "/today" },
    { label: "Week", path: "/week" },
    { label: "Projects", path: "/projects" },
    { label: "Notes", path: "/notes" }
]

function SideBar() {
  return (
    <div className="flex min-h-screen" >
        <aside style={{ width: '250px', backgroundColor: '#111', padding: '20px', height: '100vh' }}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#fff' }}>
                {menuItems.map((item) => (
                <NavLink
                    to={item.path}
                    key={item.label}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <li
                    style={{
                        padding: '12px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                    {item.label}
                    </li>
                </NavLink>
                ))}

            </ul>
            <button style={{ marginTop: '20px', padding: '10px', width: '100%', borderRadius: '4px', border: 'none', backgroundColor: '#5227FF', color: '#fff', cursor: 'pointer' }}>
                + New Task
            </button>
        </aside>
    </div>
  );
}

export default SideBar;