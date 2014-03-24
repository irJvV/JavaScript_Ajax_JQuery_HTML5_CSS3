public void doGet(HttpServletRequest request, 
                    HttpServletResponse response)
                        throws IOException, ServletException 
{
   String targetId = request.getParameter("id");

   if ((targetId != null) && 
       !accounts.containsKey(targetId.trim())) 
   {
      response.setContentType("text/xml");
      response.setHeader("Cache-Control", "no-cache");
      response.getWriter().write("true");
   } 
   else 
   {
      response.setContentType("text/xml");
      response.setHeader("Cache-Control", "no-cache");
      response.getWriter().write("false");
   }
}