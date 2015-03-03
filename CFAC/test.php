<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>

<head>
<title>Random text script useage example</title>
<style type="text/css">
body, td, p, input {
        color : #000000;
        font-family : Verdana, Geneva, Arial, Helvetica, sans-serif;
        font-size : 12px;
}
</style>
</head>

<body>

<p><b>Random text script usage example</b><br />
For further information on how to use the Random Text PHP script see <a href="readme.htm">Readme file</a></p>

<ol>

<li>
<p>Random quote using Javascript:<br />
<script type="text/javascript" src="rantex.php?type=1"></script></p>
</li>

<li>
<p>Random quote as a PHP include:<br />
<?php $_GET['type'] = 0; include 'rantex.php'; ?></p>
</li>


</ol>

<p>&nbsp;</p>

<p><a href="http://www.phpjunkyard.com/random-text.php" target="_blank">Random text</a> script by <a href="http://www.phpjunkyard.com" target="_blank">PHPJunkyard</a>.</p>

</body>

</html>
