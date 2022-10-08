import { createBrowserRouter } from "react-router-dom";

import Index from "../views/Index/Index";
import Reimbursement from "../views/Reimbursement/Reimbursement";
import AllReimbursement from "../views/AllReimbursement/AllReimbursement";
import MyReimbursement from "../views/MyReimbursement/MyReimbursement";
import ReimbursementApply from "../views/ReimbursementApply/ReimbursementApply";
import WithMe from "../views/WithMe/WithMe";
import ReimbursementExamine from "../views/ReimbursementExamine/ReimbursementExamine";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Index />,
      children: [
        {
          path: 'reimbursement',
          element: <Reimbursement />,
          children: [
            {
              path: 'all/reimbursement',
              element: <AllReimbursement />
            },
            {
              path: 'my/reimbursement',
              element: <MyReimbursement />
            },
            {
              path: 'reimbursement/apply',
              element: <ReimbursementApply />
            },
            {
              path: 'reimbursement/examine',
              element: <ReimbursementExamine />
            },
            {
              path: 'with/me',
              element: <WithMe />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: '404'
    }
]);

export default router