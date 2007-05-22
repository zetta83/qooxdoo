/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007 1&1 Internet AG, Germany, http://www.1and1.org

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Thomas Herchenroeder (thron7)

************************************************************************ */

/* ************************************************************************

#module(testrunner)

************************************************************************ */

qx.Class.define("testrunner.runner.TestAppender",
{
  extend : qx.log.Appender,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function(target) {
    this.base(arguments);
    this.target = target;
  },




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    useLongFormat :
    {
      refine : true,
      init : false
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    /**
     * TODOC
     *
     * @type member
     * @param evt {Event} TODOC
     * @return {void}
     */
    appendLogEvent : function(evt)
    {
      // Append the message
      var text = evt.logger.getName();

      if (evt.instanceId != null) {
        text += " (" + evt.instanceId + ")";
      }

      //alert("\n" + text + "\n" + this.formatLogEvent(evt));
      this.target.setHtml(this.target.getHtml()+"<br>"+this.formatLogEvent(evt));
    }
  }
});

