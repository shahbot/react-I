using Microsoft.AspNetCore.Mvc;

namespace reactdemoapi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RandController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public RandController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetRandomNumbers")]
    public IEnumerable<int> Get()
    {
        return Enumerable.Range(1, 10).Select(index => new Random().Next(10000)).ToArray();
    }
}
