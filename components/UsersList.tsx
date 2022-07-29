import React from 'react'

const UsersList = ({users}:any) => {
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Twitter
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Hobbies
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user:any) => (
                  <tr className="bg-white odd:bg-white even:bg-slate-50 dark:bg-gray-900 dark:border-gray-700" key={user._id}>
                    <td className="py-4 px-6">
                        {user.name}
                    </td>
                    <td className="py-4 px-6">
                        {user.twitter}
                    </td>
                    <td className="py-4 px-6">
                        {user.hobby}
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>

  )
}

export default UsersList