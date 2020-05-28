<script>
  import name from 'consts:name';
  import version from 'consts:version';
  import description from 'consts:description';
  import base from 'consts:base';
</script>

<div>
  <h2>{name}</h2>
  <p>{description}</p>
  <table class="bordered striped hoverable">
    <tbody>
      <tr>
        <td>Version</td>
        <td>{version}</td>
      </tr>
      <tr>
        <td>Mounted</td>
        <td>{base}</td>
      </tr>
    </tbody>
  </table>
</div>
